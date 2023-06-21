import { useState } from 'react';
import signupMainImg from '../../assets/signupMainImg.jpg';

const initialInputs = {
  email: '',
  password: '',
  nickName: '',
  phoneNumber: '',
};

function SignupPage() {
  const [inputs, setInputs] = useState(initialInputs);
  const { email, password, nickName, phoneNumber } = inputs;
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
    <div className="flex items-center justify-center min-h-screen mx-8 max-w-7xl md:p-16">
      <div className="flex bg-yellow-300 shadow-2xl rounded-2xl">
        <div className="flex flex-col w-7/12 m-auto text-center">
          <div className="pt-8 md:p-7">
            <h1 className="text-4xl font-semibold">회원가입</h1>
            <h3 className="text-md"></h3>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
            className="space-y-8 text-center md:ml-10 md:mr-10"
          >
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

            <input
              type="text"
              className="w-full h-10 rounded-xl indent-3 focus:outline-none"
              placeholder="닉네임"
              name="nickName"
              value={nickName}
              onChange={handleChangeInputs}
              required
            />

            <input
              type="text"
              className="w-full h-10 rounded-xl indent-3 focus:outline-none"
              placeholder="전화번호"
              name="phoneNumber"
              value={phoneNumber}
              onChange={handleChangeInputs}
              required
            />

            <div>
              {profilePhoto && <img src={profilePhoto} className="rounded-full mb-1" />}
              <label
                className="p-2 bg-yellow-200 rounded-xl cursor-pointer hover:opacity-80 transition-all"
                htmlFor="input-file"
              >
                프로필 사진 추가
              </label>
              {profilePhoto && (
                <button
                  onClick={() => setProfilePhoto('')}
                  className="p-2 bg-red-200 rounded-xl cursor-pointer hover:opacity-80 transition-all ml-1"
                >
                  삭제
                </button>
              )}
              <input
                type="file"
                id="input-file"
                accept="image*"
                onChange={handleFileChange}
                className="hidden"
              />
            </div>

            <div className="pb-6">
              <button
                type="submit"
                className="w-full h-10 text-white rounded-xl bg-signup-signupBlue font-semibold"
              >
                SignUp
              </button>
            </div>
          </form>
        </div>
        <div className="hidden w-9/12 md:block">
          <img
            className="object-cover w-full h-full rounded-r-2xl"
            src={signupMainImg}
            alt="signupMainImage"
          />
        </div>
      </div>
    </div>
  );
}
export default SignupPage;
