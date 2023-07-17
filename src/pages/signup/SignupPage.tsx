import { useState } from 'react';
import { Link } from 'react-router-dom';

import signupBgImg from '../../assets/signup/signup-bg-img.jpeg';

const initialInputs = {
  email: '',
  password: '',
  nickname: '',
  phoneNumber: '',
};

function SignupPage() {
  const [inputs, setInputs] = useState(initialInputs);
  const { email, password, nickname, phoneNumber } = inputs;
  const [profilePhoto, setProfilePhoto] = useState('');

  const handleChangeInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    let formData = new FormData();
    formData.append('imgFile', file);
    const fileReader = new FileReader();
    fileReader.onload = (e: any) => {
      setProfilePhoto(e.target.result);
    };
    fileReader.readAsDataURL(file);
  };

  return (
    <div
      style={{
        backgroundImage: `url(${signupBgImg})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
      className="flex items-center justify-center max-w-5xl min-h-screen md:p-16"
    >
      <div className="flex w-4/5 bg-opacity-50 shadow-2xl bottom-12 bg-memyo-yellow8 rounded-2xl">
        <div className="flex flex-col w-7/12 m-auto">
          <div className="text-center md:mt-8">
            <h1 className="hidden text-4xl font-semibold text-white shadow-inner md:block">
              묘한만남
            </h1>
            <h3 className="hidden text-gray-600 md:block text-md">Adopt your Life Partner</h3>
          </div>
          <div className="space-y-6 md:ml-10 md:mr-10">
            <div className="space-y-3 text-center">
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
                onChange={handleChangeInputs}
                required
              />
              <input
                type="text"
                className="w-full h-10 mt-12 shadow-2xl rounded-xl indent-3 focus:outline-none"
                placeholder="닉네임"
                name="nickname"
                value={nickname}
                onChange={handleChangeInputs}
                required
              />
              <input
                type="text"
                className="w-full h-10 mt-12 shadow-2xl rounded-xl indent-3 focus:outline-none"
                placeholder="전화번호"
                name="phoneNumber"
                value={phoneNumber}
                onChange={handleChangeInputs}
                required
              />
            </div>
            <div className="flex items-center justify-center">
              <button className="w-full h-10 text-white bg-blue-500 shadow-2xl rounded-xl">
                회원가입
              </button>
            </div>
            <div className="flex items-center justify-center pb-4 space-x-2">
              <p className="text-xs">이미 회원이신가요? </p>
              <Link to="/login" className="text-xs font-semibold">
                로그인하기
              </Link>
            </div>
          </div>
        </div>
        {/* <div className="hidden w-9/12 md:block">
          <img
            className="object-fill w-full h-full rounded-r-2xl"
            src={signupMainImg}
            alt="signupMainImage"
          />
        </div> */}
      </div>
    </div>
  );
}

export default SignupPage;
