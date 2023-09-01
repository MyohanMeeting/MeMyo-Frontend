import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import type { RootState } from '@redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';

import { kakaoSigninThunk } from '@redux/thunks/AuthThunk';
import { handleLoginResponse } from '@/utils/ApiResponseHandler';
import type { ErrorResponse } from '../pages/login/LoginPage';
import { checkDuplicateEmailOrNickname } from '../services/authService';

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
  const dispatch = useDispatch();
  const { status } = useSelector((state: RootState) => state.persistedReducer.auth);

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
    if (status === 'successed') navigate('/');
  }, []);

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
              (dispatch as ThunkDispatch<RootState, void, AnyAction>)(
                kakaoSigninThunk(res.data.id)
              ).then((actionResult) => {
                if (kakaoSigninThunk.fulfilled.match(actionResult)) {
                  navigate('/');
                } else if (kakaoSigninThunk.rejected.match(actionResult)) {
                  const errorMessage = handleLoginResponse(actionResult.payload?.message ?? '');
                  alert(errorMessage);
                  setInputs({
                    email: res.data.kakao_account.email ?? '',
                    nickname: res.data.kakao_account.profile?.nickname ?? '',
                  });
                  setUserInfo((prev) => ({
                    ...prev,
                    oauthId: String(res.data.id),
                  }));
                }
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

    try {
      const data = await checkDuplicateEmailOrNickname(type, stateValue);
      if (data?.message === 'SUCCESS') {
        alert(`사용가능한 ${type === 'email' ? '이메일' : '닉네임'}입니다.`);
        setUserInfo((prev) => ({
          ...prev,
          [type]: stateValue,
        }));
      }
    } catch (error) {
      if (axios.isAxiosError<ErrorResponse, any>(error)) {
        console.log(error.response?.data);
        alert(error.response?.data.debugMessage);
        // setUserInfo((prev) => ({
        //   ...prev,
        //   [type]: '',
        // }));
      }
    }
  };

  useEffect(() => {
    // if (status === 'successed') {
    //   navigate('/');
    // }
  }, []);

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
        if (axios.isAxiosError<ErrorResponse, any>(err)) {
          alert(err.response?.data.debugMessage);
        }
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
