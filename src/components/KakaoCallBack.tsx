import axios from 'axios';
import { useState, useEffect } from 'react';

const DUPLICATE_EMAIL_API_URL = '/v1/member/email';
const DUPLICATE_NICKNAME_API_URL = '/v1/member/nickname';

interface KakaoResponseData {
  access_token: string;
  expires_in: number;
  id_token: string;
  refresh_token: string;
  refresh_token_expires_in: number;
  scope: string;
  token_type: string;
}

interface KakaoUserResponseData {
  connected_at: string;
  id: number;
  kakao_account: {
    email?: string;
    email_needs_agreement: boolean;
    has_email: boolean;
    is_email_valid: boolean;
    is_email_verified: boolean;
    profile_nickname_needs_agreement: boolean;
    profile?: {
      nickname?: string;
    };
  };
}

interface ErrorResponse {
  status: string;
  timestamp: string;
  message: string;
  debugMessage: string;
}

function KakaoCallBack() {
  const searchParams = new URLSearchParams(window.location.search);
  const code = searchParams.get('code');
  const grant_type = 'authorization_code';
  const clientId = import.meta.env.VITE_KAKAO_API_KEY;
  const redirectURL = import.meta.env.VITE_KAKAO_REDIRECT_URL;

  const [inputs, setInputs] = useState({
    email: '',
    nickname: '',
  });
  const { email, nickname } = inputs;
  const [userInfo, setUserInfo] = useState({
    oauthType: 'KAKAOTALK',
    oauthId: '',
    email: '',
    nickname: '',
  });

  const handleChangeInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    axios
      .post<KakaoResponseData>(
        `https://kauth.kakao.com/oauth/token?grant_type=${grant_type}&client_id=${clientId}&redirect_uri=${redirectURL}&code=${code}`,
        {},
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8",',
          },
        }
      )
      .then((res) => {
        console.log('1', res);
        const { access_token } = res.data;
        if (access_token) {
          // console.log(`Bearer ${access_token}`);
          axios
            .post<KakaoUserResponseData>(
              `https://kapi.kakao.com/v2/user/me`,
              {},
              {
                headers: {
                  Authorization: `Bearer ${access_token}`,
                  'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8",',
                },
              }
            )
            .then((res) => {
              console.log('2', res);
              setInputs({
                email: res.data.kakao_account.email ?? '',
                nickname: res.data.kakao_account.profile?.nickname ?? '',
              });
              setUserInfo((prev) => ({
                ...prev,
                oauthId: String(res.data.id),
              }));
            });
        }
      })

      .catch((error) => {
        console.log('error', error);
      });
  }, []);

  const handleDuplicateEmailOrNickname = async (type: 'email' | 'nickname') => {
    const stateValue = type === 'email' ? email : nickname;
    const url = type === 'email' ? DUPLICATE_EMAIL_API_URL : DUPLICATE_NICKNAME_API_URL;

    try {
      const data = await axios({
        method: 'GET',
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
        },
        url: `${url}?${type}=${stateValue}`,
        data: JSON.stringify(inputs),
      });

      if (data?.data.message === 'SUCCESS') {
        alert(`사용가능한 ${type === 'email' ? '이메일' : '닉네임'}입니다.`);
        setUserInfo((prev) => ({
          ...prev,
          [type]: stateValue,
        }));
      }
    } catch (error) {
      if (axios.isAxiosError<ErrorResponse, any>(error)) {
        alert(error.response?.data.debugMessage);
        setUserInfo((prev) => ({
          ...prev,
          [type]: '',
        }));
      }
    }
  };

  console.log(userInfo);

  const handleKakaoSubmit = () => {
    axios({
      method: 'post',
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
      },
      url: '/v1/member/oauth',
      data: JSON.stringify(userInfo),
    })
      .then((res) => {
        //
      })
      .catch((err) => {
        //
      });
  };

  return (
    <div className=" h-60 flex flex-col">
      <div className="flex items-center">
        <input name="email" value={email} placeholder="이메일" onChange={handleChangeInputs} />
        <button onClick={() => handleDuplicateEmailOrNickname('email')}>중복 확인</button>
      </div>
      <div className="flex items-center">
        <input
          name="nickname"
          value={nickname}
          placeholder="닉네임"
          onChange={handleChangeInputs}
        />
        <button onClick={() => handleDuplicateEmailOrNickname('nickname')}>중복 확인</button>
      </div>
      <button onClick={handleKakaoSubmit}>가입하기</button>
    </div>
  );
}

export default KakaoCallBack;
