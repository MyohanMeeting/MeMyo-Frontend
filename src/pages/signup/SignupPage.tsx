import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import signupBgImg from '../../assets/signup/signup-bg-img.jpeg';
import { checkDuplicateEmailOrNickname } from '../../services/authService';

interface ErrorResponse {
  status: string;
  timestamp: string;
  message: string;
  debugMessage: {
    [key: string]: string;
  };
}


function SignupPage() {
  const [errorData, setErrorData] = useState<ErrorResponse['debugMessage']>({});
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

  const [isCompleted, setIsCompleted] = useState(false);

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
    const stateValue = type === 'email' ? email : nickname;
    const stateName = type === 'email' ? 'isDuplicatedEmail' : 'isDuplicatedNickname';

    try {
      const data = await checkDuplicateEmailOrNickname(type, stateValue);
      // console.log('data', data);
      if (data?.message === 'SUCCESS') {
        alert(`사용가능한 ${type === 'email' ? '이메일' : '닉네임'}입니다.`);
        setDuplicated((prev) => ({
          ...prev,
          [stateName]: stateValue,
        }));
      }
    } catch (err) {
      // console.log('err', err);
      if (axios.isAxiosError<ErrorResponse, any>(err)) {
        setDuplicated((prev) => ({
          ...prev,
          [stateName]: false,
        }));
      }
    }
  };

  const handleSignUp = async () => {
    try {
      const data = await axios({
        method: 'post',
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
        },
        url: 'v1/member/direct',
        data: JSON.stringify(inputs),
      });

      if (data.status === 200) {
        alert('회원가입이 완료됐습니다.');
        setIsCompleted(true);
      }
    } catch (error) {
      if (axios.isAxiosError<ErrorResponse, any>(error)) {
        console.log(error.response?.data);
        setErrorData(error.response?.data.debugMessage!);
      }
    }
  };

  const isEmailBtnDisabled = email.length < 8 || isDuplicatedEmail === email;
  const isNicknameBtnDisabled = nickname.length < 1 || isDuplicatedNickname === nickname;

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
        {!isCompleted ? (
          <div className="flex flex-col w-7/12 m-auto">
            <div className="text-center md:mt-8">
              <h1 className="hidden text-4xl font-semibold text-white shadow-inner md:block">
                묘한만남
              </h1>
              <h3 className="hidden text-gray-600 md:block text-md">Adopt your Life Partner</h3>
            </div>

            {Object.keys(errorData).length > 0 && (
              <ul className="bg-white text-red-400 rounded-sm p-2 mt-2">
                {Object.keys(errorData).map((key, index) => (
                  <li key={index}>- {errorData[key]}</li>
                ))}
              </ul>
            )}

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
                  minLength={6}
                  maxLength={100}
                  required
                />
                <button
                  disabled={isEmailBtnDisabled}
                  className={`${isEmailBtnDisabled ? 'font-thin text-gray-800' : 'font-semibold'}`}
                  onClick={() => handleDuplicateEmailOrNickname('email')}
                >
                  이메일 중복 확인
                </button>

                <input
                  type="text"
                  className="w-full h-10 mt-12 shadow-2xl rounded-xl indent-3 focus:outline-none"
                  placeholder="닉네임"
                  name="nickname"
                  value={nickname}
                  onChange={handleChangeInputs}
                  minLength={1}
                  maxLength={11}
                  required
                />
                <button
                  disabled={isNicknameBtnDisabled}
                  className={`${
                    isNicknameBtnDisabled ? 'font-thin text-gray-800' : 'font-semibold'
                  }`}
                  onClick={() => handleDuplicateEmailOrNickname('nickname')}
                >
                  닉네임 중복 확인
                </button>

                <input
                  type="password"
                  className="w-full h-10 shadow-2xl rounded-xl indent-3 focus:outline-none"
                  placeholder="비밀번호"
                  name="password"
                  value={password}
                  onChange={handleChangeInputs}
                  minLength={8}
                  maxLength={24}
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
        ) : (
          <div className="text-center p-8">
            <h2 className=" font-semibold">인증 이메일이 발송되었습니다!</h2>
            <p>
              가입을 완료하려면 이메일 인증이 필요합니다. 받은 메일함을 확인하시고 제공된 지시에
              따라주십시오.
            </p>
            <p className="my-4">
              발송된 메일 주소는{' '}
              <span className="font-medium bg-gray-100 px-1">{isDuplicatedEmail || email}</span>{' '}
              입니다.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default SignupPage;
