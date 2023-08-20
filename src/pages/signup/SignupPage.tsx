import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import signupBgImg from '../../assets/signup/signup-bg-img.jpeg';

const DUPLICATE_EMAIL_API_URL = 'v1/member/email';
const DUPLICATE_NICKNAME_API_URL = 'v1/member/nickname';
const DIRECT_SIGNUP_API_URL = 'v1/member/direct';
const CERTIFICATION_EMAIL_API_URL = 'v1/member/certification';

interface ErrorResponse {
  status: string;
  timestamp: string;
  message: string;
  debugMessage: string;
}

function SignupPage() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
    nickname: '',
    phoneNumber: '',
  });
  const { email, password, nickname, phoneNumber } = inputs;
  const [duplicated, setDuplicated] = useState({
    isDuplicatedEmail: null,
    isDuplicatedNickname: null,
  });
  const { isDuplicatedEmail, isDuplicatedNickname } = duplicated;

  const handleChangeInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === 'phoneNumber') {
      let formattedValue = value
        .replace(/\D+/g, '') // 숫자 외의 문자 제거
        .slice(0, 11) // 최대 11 자리까지 자르기
        .split('')
        .map((digit, index) => {
          if (index === 2 || index === 6) {
            // 3번째 또는 7번째 위치에서 하이픈 추가
            return digit + '-';
          }
          return digit;
        })
        .join('');
      setInputs((prevInputs) => ({
        ...prevInputs,
        phoneNumber: formattedValue,
      }));
    } else {
      setInputs((prevInputs) => ({
        ...prevInputs,
        [name]: value,
      }));
    }
  };

  const handleDuplicateEmailOrNickname = async (type: 'email' | 'nickname') => {
    let data;
    const stateName = type === 'email' ? 'isDuplicatedEmail' : 'isDuplicatedNickname';
    try {
      if (type === 'email') {
        data = await axios({
          method: 'GET',
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
          },
          url: `${DUPLICATE_EMAIL_API_URL}?email=${email}`,
          data: JSON.stringify(inputs),
        });
      } else if (type === 'nickname') {
        data = await axios({
          method: 'GET',
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
          },
          url: `${DUPLICATE_NICKNAME_API_URL}?nickname=${nickname}`,
          data: JSON.stringify(inputs),
        });
      }
      // console.log(type, data?.data);
      if (data?.data.message === 'SUCCESS') {
        alert(`${type === 'email' ? '이메일' : '닉네임'} 인증이 완료됐습니다.`);
        setDuplicated((prev) => ({
          ...prev,
          [stateName]: true,
        }));
      }
    } catch (error) {
      if (axios.isAxiosError<ErrorResponse, any>(error)) {
        alert(error.response?.data.debugMessage);
        setDuplicated((prev) => ({
          ...prev,
          [stateName]: false,
        }));
      }
    }
  };
  console.log(duplicated);

  const handleSignUp = async () => {
    try {
      const data = await axios({
        method: 'post',
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
        },
        url: DIRECT_SIGNUP_API_URL,
        data: JSON.stringify(inputs),
      });
      if (data.status === 200) {
        alert('회원가입이 완료됐습니다!');
        navigate('/login');
      }
    } catch (error) {
      if (axios.isAxiosError<ErrorResponse, any>(error)) {
        alert(error.response?.data.debugMessage);
      }
    }
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
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSignUp();
              }}
              className="space-y-3 text-center"
            >
              <input
                type="text"
                className="w-full h-10 mt-12 shadow-2xl rounded-xl indent-3 focus:outline-none"
                placeholder="이메일"
                name="email"
                value={email}
                onChange={handleChangeInputs}
                required
              />
              {(isDuplicatedEmail === false || isDuplicatedEmail === null) && (
                <button className="" onClick={() => handleDuplicateEmailOrNickname('email')}>
                  이메일 중복 확인
                </button>
              )}

              <input
                type="text"
                className="w-full h-10 mt-12 shadow-2xl rounded-xl indent-3 focus:outline-none"
                placeholder="닉네임"
                name="nickname"
                value={nickname}
                onChange={handleChangeInputs}
                minLength={1}
                required
              />
              {isDuplicatedNickname === false ||
                (isDuplicatedNickname === null && (
                  <button className="" onClick={() => handleDuplicateEmailOrNickname('nickname')}>
                    닉네임 중복 확인
                  </button>
                ))}

              <input
                type="password"
                className="w-full h-10 shadow-2xl rounded-xl indent-3 focus:outline-none"
                placeholder="비밀번호"
                name="password"
                value={password}
                onChange={handleChangeInputs}
                minLength={6}
                required
              />

              <input
                type="text"
                className="w-full h-10 mt-12 shadow-2xl rounded-xl indent-3 focus:outline-none"
                placeholder="전화번호"
                name="phoneNumber"
                value={phoneNumber}
                onChange={handleChangeInputs}
                minLength={13}
                maxLength={13}
                required
              />

              <div className="flex items-center justify-center">
                <button className="w-full h-10 text-white bg-blue-500 shadow-2xl rounded-xl">
                  회원가입
                </button>
              </div>
            </form>
            <div className="flex items-center justify-center text-sm pb-4 space-x-2">
              <p>이미 회원이신가요? </p>
              <Link to="/login" className="font-semibold">
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
