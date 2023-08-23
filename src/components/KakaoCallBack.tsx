import axios from 'axios';
import { useState, useEffect } from 'react';

const DUPLICATE_EMAIL_API_URL = '/v1/member/email';
const DUPLICATE_NICKNAME_API_URL = '/v1/member/nickname';
import type { ErrorResponse } from '../pages/login/LoginPage';
import { useNavigate } from 'react-router';

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

interface SuccessResonse {
  status: string;
  timestamp: string;
  message: string;
  data: {
    memberId: number;
  };
}

function KakaoCallBack() {
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(window.location.search);
  const code = searchParams.get('code');
  const grant_type = 'authorization_code';
  const clientId = import.meta.env.VITE_KAKAO_API_KEY;
  const redirectURL = import.meta.env.VITE_KAKAO_REDIRECT_URL;

  const [isCompleted, setIsCompleted] = useState(false);

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
              handleKakaoSignin(String(res.data.id))
                .then((res) => {
                  // 로그인
                  console.log('카카오 로그인 res', res);
                })
                .catch((err) => {
                  // 가입안됨 -> 회원가입
                  if (axios.isAxiosError<ErrorResponse, any>(err)) {
                    console.log('카카오 로그인 에러', err.response?.data.debugMessage);
                    if (err.response?.data.debugMessage === 'UNCERTIFIED') {
                      alert('이메일이 인증되지 않았습니다. 메일을 확인해주세요.');
                    }
                  }
                  setInputs({
                    email: res.data.kakao_account.email ?? '',
                    nickname: res.data.kakao_account.profile?.nickname ?? '',
                  });
                  setUserInfo((prev) => ({
                    ...prev,
                    oauthId: String(res.data.id),
                  }));
                });
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

  const handleKakaoSignup = () => {
    axios<SuccessResonse>({
      method: 'post',
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
      },
      url: '/v1/member/oauth',
      data: JSON.stringify(userInfo),
    })
      .then((res) => {
        console.log('res', res.data);
        // 메일인증
        setIsCompleted(true);
      })
      .catch((err) => {
        console.log('err', err);
        // 카카오가입실패
      });
  };

  const handleKakaoSignin = (oauthId: string) => {
    return axios({
      method: 'post',
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
      },
      url: '/v1/auth/signin/oauth',
      data: JSON.stringify({
        oauthType: 'KAKAOTALK',
        oauthId,
      }),
    });
  };

  return (
    <div className="h-80 flex flex-col items-center justify-center gap-y-1">
      {isCompleted ? (
        <div className="text-center">
          <h2 className=" font-semibold">인증 이메일이 발송되었습니다!</h2>
          <p>
            가입을 완료하려면 이메일 인증이 필요합니다. 받은 메일함을 확인하시고 제공된 지시에
            따라주십시오.
          </p>
          <p className="my-4">
            발송된 메일 주소는 <span className="font-medium bg-gray-100">{userInfo.email}</span>{' '}
            입니다.
          </p>
          <input />
        </div>
      ) : (
        <>
          <div className="flex items-center">
            <input
              type="email"
              minLength={6}
              name="email"
              value={email}
              placeholder="이메일"
              onChange={handleChangeInputs}
              className="border rounded-tl-sm rounded-bl-sm p-1"
            />
            <button
              onClick={() => handleDuplicateEmailOrNickname('email')}
              className="bg-gray-200 h-full px-1 rounded-tr-sm rounded-br-sm"
            >
              중복 확인
            </button>
          </div>
          <div className="flex items-center">
            <input
              name="nickname"
              value={nickname}
              placeholder="닉네임"
              onChange={handleChangeInputs}
              className="border rounded-tl-sm rounded-bl-sm p-1"
            />
            <button
              onClick={() => handleDuplicateEmailOrNickname('nickname')}
              className="bg-gray-200 h-full px-1 rounded-tr-sm rounded-br-sm"
            >
              중복 확인
            </button>
          </div>
          <button
            onClick={handleKakaoSignup}
            className="w-64 py-1 rounded-sm shadow-sm bg-memyo-yellow5 mt-1"
          >
            가입하기
          </button>
        </>
      )}
    </div>
  );
}

export default KakaoCallBack;
