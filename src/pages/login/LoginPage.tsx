import { useState } from 'react';
import kakaoLoginImg from '../../assets/login/kakao_login_medium_wide.png';
import loginImg from '../../assets/login/login-cat-image.jpeg';
import { Link } from 'react-router-dom';

const initialInputs = {
  email: '',
  password: '',
};

function LoginPage() {
  const [inputs, setInputs] = useState(initialInputs);
  const { email, password } = inputs;

  const handleChangeInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  return (
    <div className="flex items-center justify-center min-h-screen mx-8 md:p-16 max-w-7xl">
      <div className="flex bg-orange-300 shadow-2xl rounded-2xl">
        <div className="flex flex-col w-7/12 m-auto">
          <div className="mt-8 text-center">
            <h1 className="text-4xl font-semibold">로그인</h1>
            <h3 className="text-gray-600 text-md">Adopt your Life partner</h3>
          </div>
          <div className="space-y-8 text-center md:ml-10 md:mr-10">
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
              <button className="w-full h-10 text-white bg-blue-500 rounded-xl font-semibold">
                SignIn
              </button>
              <div className="pb-6">
                <img
                  className="object-cover w-screen h-10 rounded-xl"
                  src={kakaoLoginImg}
                  alt="kakaoLoginImage"
                />
              </div>
              <p className="p-2 pb-4 text-sm">
                <Link to="/signup">
                  회원이 아니신가요? <span className="font-semibold">회원가입하기</span>
                </Link>
              </p>
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
