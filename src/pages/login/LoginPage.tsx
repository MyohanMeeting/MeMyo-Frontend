import { useState } from 'react';
import { Link } from 'react-router-dom';

import loginImg from '../../assets/login/login-cat-image.jpeg';

const initialInputs = {
  email: '',
  password: '',
};

function LoginPage() {
  const REST_API_KEY = import.meta.env.VITE_KAKAO_API_KEY;
  const RIDIRECT_URL = import.meta.env.VITE_KAKAO_REDIRECT_URL;
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${RIDIRECT_URL}&response_type=code`;

  const [inputs, setInputs] = useState(initialInputs);
  const { email, password } = inputs;

  const handleChangeInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  const hadleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleKakaoLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

  return (
    <div className="flex items-center justify-center min-h-screen mx-8 md:p-16 max-w-7xl">
      <div className="flex bg-orange-300 shadow-2xl rounded-2xl">
        <div className="flex flex-col w-7/12 m-auto">
          <div className="mt-8 text-center">
            <h1 className="text-4xl font-semibold">로그인</h1>
            <h3 className="text-gray-600 text-md">Adopt your Life partner</h3>
          </div>
          <form onSubmit={hadleSubmit} className="space-y-8 text-center md:ml-10 md:mr-10">
            <input
              type="email"
              className="w-full h-10 mt-12 rounded-xl indent-3 focus:outline-none"
              placeholder="이메일"
              name="email"
              value={email}
              onChange={handleChangeInputs}
              required
            />
            <input
              type="password"
              className="w-full h-10 rounded-xl indent-3 focus:outline-none"
              placeholder="비밀번호"
              name="password"
              value={password}
              onChange={handleChangeInputs}
              required
            />
            <div className="space-y-2">
              <button
                type="submit"
                className="w-full h-10 text-white bg-blue-500 rounded-xl font-semibold"
              >
                SignIn
              </button>
              <button
                className="w-full h-10 rounded-xl font-semibold flex items-center justify-center bg-[#FEE500]"
                onClick={handleKakaoLogin}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 mr-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"
                  />
                </svg>
                카카오 로그인
              </button>
              <p className="p-2 pb-4 text-sm">
                <Link to="/signup">
                  회원이 아니신가요? <span className="font-semibold">회원가입하기</span>
                </Link>
              </p>
            </div>
          </form>
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
