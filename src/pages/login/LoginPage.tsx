import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';

import type { RootState } from '@redux/store';
import { emailSigninThunk } from '@redux/thunks/AuthThunk';
import loginImg from '../../assets/login/login-cat-image.jpeg';
import loginBgImg from '../../assets/login/login-background.jpeg';
export interface ErrorResponse {
  status: string;
  timestamp: string;
  message: string;
  debugMessage: string;
}

function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const REST_API_KEY = import.meta.env.VITE_KAKAO_API_KEY;
  const RIDIRECT_URL = import.meta.env.VITE_KAKAO_REDIRECT_URL;
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${RIDIRECT_URL}&response_type=code`;

  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });
  const { email, password } = inputs;

  const handleChangeInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  const { status } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    if (status === 'successed') navigate('/');
  }, []);

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const actionResult = await (dispatch as ThunkDispatch<RootState, void, AnyAction>)(
      emailSigninThunk(inputs)
    );
    if (emailSigninThunk.fulfilled.match(actionResult)) {
      navigate('/');
    } else if (emailSigninThunk.rejected.match(actionResult)) {
      alert(actionResult.payload?.errorMessage);
    }
  };

  const handleKakaoLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

  return (
    <div
      style={{
        backgroundImage: `url(${loginBgImg})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
      className="flex items-center justify-center max-w-5xl min-h-screen md:p-16"
    >
      <div className="flex w-4/5 bg-opacity-50 shadow-2xl bottom-12 bg-memyo-yellow8 rounded-2xl">
        <div className="flex flex-col w-8/12 m-auto">
          <div className="text-center md:mt-8">
            <h1 className="pt-6 text-4xl font-semibold text-white md:block">로그인</h1>
            <h3 className="hidden text-gray-600 md:block text-md">
              MeMyo - Adopt your Life partner
            </h3>
          </div>
          <div className="space-y-6">
            <div className="space-y-3 text-center md:ml-10 md:mr-10">
              <input
                type="text"
                className="w-full h-10 mt-12 shadow-2xl rounded-xl indent-3 focus:outline-none"
                placeholder="이메일"
                name="email"
                value={email}
                onChange={handleChangeInputs}
                required
              />

              <input
                type="password"
                className="w-full h-10 shadow-2xl rounded-xl indent-3 focus:outline-none"
                placeholder="비밀번호"
                name="password"
                value={password}
                minLength={8}
                maxLength={24}
                onChange={handleChangeInputs}
                required
              />
            </div>
            <div className="space-y-1 text-center md:ml-10 md:mr-10">
              <button
                onClick={handleSubmit}
                className="w-full h-10 text-white bg-blue-500 shadow-xl rounded-xl font-medium"
              >
                로그인
              </button>
              <button
                onClick={handleKakaoLogin}
                className="w-full flex items-center justify-center h-10 bg-[#F7E600] text-[#3A1D1D] shadow-xl rounded-xl font-medium"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 mr-1"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.337 21.718a6.707 6.707 0 01-.533-.074.75.75 0 01-.44-1.223 3.73 3.73 0 00.814-1.686c.023-.115-.022-.317-.254-.543C3.274 16.587 2.25 14.41 2.25 12c0-5.03 4.428-9 9.75-9s9.75 3.97 9.75 9c0 5.03-4.428 9-9.75 9-.833 0-1.643-.097-2.417-.279a6.721 6.721 0 01-4.246.997z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="">카카오 로그인</span>
              </button>
              <div className="flex items-center justify-center py-4 space-x-2">
                <p className="text-xs text-gray-600">아직 아이디가 없으신가요?</p>
                <Link to="/signup" className="text-xs font-semibold">
                  회원가입
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden w-9/12 md:block">
          <img
            className="object-fill w-full h-full rounded-r-2xl"
            src={loginImg}
            alt="signupMainImage"
          />
        </div>
      </div>
    </div>
  );
}
export default LoginPage;
