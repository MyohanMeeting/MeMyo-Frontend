import axios from 'axios';
import { useCallback, useState } from 'react';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

import signupBgImg from '../../assets/signup/signup-bg-img.jpeg';
import { type ErrorResponse, emailSignUp } from '@/apis/authApi';
import { checkDuplicateEmailOrNickname } from '../../services/authService';

function SignupPage() {
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
    nickname: '',
    phoneNumber: '',
  });
  const { email, password, nickname, phoneNumber } = inputs;
  const [isDuplicatedEmail, setIsDuplicatedEmail] = useState<string | boolean>('');
  const [isDuplicatedNickname, setIsDuplicatedNickname] = useState<string | boolean>('');
  const [isCompleted, setIsCompleted] = useState(false);
  const [errorData, setErrorData] = useState<ErrorResponse['debugMessage']>({});

  const handleChangeInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: name === 'phoneNumber' ? formatPhoneNumber(value) : value,
    }));
  };

  const handleDuplicateEmailOrNickname = useCallback(
    async (type: 'email' | 'nickname') => {
      const stateValue = type === 'email' ? email : nickname;
      const setStateFunc = type === 'email' ? setIsDuplicatedEmail : setIsDuplicatedNickname;
      try {
        const data = await checkDuplicateEmailOrNickname(type, stateValue);
        if (data?.message === 'SUCCESS') {
          toast.success(`사용가능한 ${type === 'email' ? '이메일' : '닉네임'}입니다.`);
          setStateFunc(stateValue);
        }
      } catch (err) {
        if (axios.isAxiosError<ErrorResponse, any>(err)) {
          if (err.code === 'ERR_NETWORK') {
            toast.error(`네트워크에 문제가 생겼습니다. 잠시 후 다시 시도해주세요.`);
          } else {
            toast.error(`이미 사용중인 ${type === 'email' ? '이메일' : '닉네임'}입니다.`);
            setStateFunc(false);
          }
        }
      }
    },
    [email, nickname]
  );

  const isEmailValid = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email);
  const isPasswordValid = /^(?=.*[a-z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(password);
  const isNicknameValid = /^[\wㄱ-ㅎㅏ-ㅣ가-힣]{3,}$/.test(nickname);
  const isPhoneNumberValid = /^\d{3}-\d{4}-\d{4}$/.test(phoneNumber);

  const isFormValid = () => {
    const allFieldsFilled = Object.values(inputs).every((value) => value !== '');
    const duplicationChecked =
      isDuplicatedEmail !== false &&
      isDuplicatedEmail !== '' &&
      isDuplicatedNickname !== false &&
      isDuplicatedNickname !== '';
    return (
      allFieldsFilled &&
      isEmailValid &&
      isPasswordValid &&
      isNicknameValid &&
      isPhoneNumberValid &&
      duplicationChecked
    );
  };

  const handleSignUp = useCallback(async () => {
    if (!isFormValid()) {
      toast.error('모든 필드를 입력하고, 중복확인을 완료해주세요.');
      return;
    }
    try {
      const data = await emailSignUp({
        email: isDuplicatedEmail as string,
        nickname: isDuplicatedNickname as string,
        password,
        phoneNumber,
      });
      if (data.status === 200) {
        toast.success('회원가입이 완료됐습니다.');
        setIsCompleted(true);
      }
    } catch (err) {
      if (axios.isAxiosError<ErrorResponse, any>(err)) {
        if (err.code === 'ERR_NETWORK') {
          toast.error(`네트워크에 문제가 생겼습니다. 잠시 후 다시 시도해주세요.`);
        } else {
          setErrorData(err.response?.data.debugMessage!);
        }
      }
    }
  }, [inputs, isDuplicatedEmail, isDuplicatedNickname]);

  const isEmailBtnDisabled = !isEmailValid || isDuplicatedEmail === email;
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
      <div className="flex w-4/5 bg-opacity-60 shadow-2xl bottom-12 bg-memyo-yellow8 rounded-2xl">
        {!isCompleted ? (
          <div className="flex flex-col p-4 md:p-0 md:w-7/12 m-auto">
            <div className="text-center md:mt-8">
              <h1 className="text-xl md:text-4xl font-semibold text-white shadow-inner md:block">
                묘한만남
              </h1>
              <h3 className="hidden text-gray-700 md:block text-md">Adopt your Life Partner</h3>
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
                <label htmlFor="email" className="sr-only">
                  이메일
                </label>
                <input
                  id="email"
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
                  type="button"
                  disabled={isEmailBtnDisabled}
                  className={`${
                    isEmailBtnDisabled
                      ? 'text-gray-800'
                      : 'font-semibold text-memyo-yellow6 hover:text-memyo-yellow8'
                  }`}
                  onClick={() => handleDuplicateEmailOrNickname('email')}
                  aria-label="이메일 중복 확인"
                >
                  이메일 중복 확인
                </button>

                <label htmlFor="nickname" className="sr-only">
                  닉네임
                </label>
                <input
                  id="nickname"
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
                  type="button"
                  disabled={isNicknameBtnDisabled}
                  className={`${
                    isNicknameBtnDisabled
                      ? 'text-gray-800'
                      : 'font-semibold text-memyo-yellow6 hover:text-memyo-yellow8'
                  }`}
                  onClick={() => handleDuplicateEmailOrNickname('nickname')}
                  aria-label="닉네임 중복 확인"
                >
                  닉네임 중복 확인
                </button>

                <label htmlFor="password" className="sr-only">
                  비밀번호
                </label>
                <input
                  id="password"
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

                <label htmlFor="phoneNumber" className="sr-only">
                  전화번호
                </label>
                <input
                  id="phoneNumber"
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
                  <button
                    type="submit"
                    className="w-full h-10 text-white font-medium bg-blue-500 hover:bg-blue-600 transition-colors shadow-2xl rounded-xl"
                  >
                    회원가입
                  </button>
                </div>
              </form>

              <div className="flex items-center justify-center text-sm md:text-base pb-4 space-x-2">
                <p className="text-gray-800">이미 회원이신가요? </p>
                <Link to="/login" className="font-semibold hover:underline">
                  로그인하기
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center p-8">
            <h2 className="text-lg font-semibold">인증 이메일이 발송되었습니다!</h2>
            <p className="pt-4 pb-2">
              가입을 완료하려면 이메일 인증이 필요합니다. 받은 메일함을 확인하시고 제공된 지시에
              따라주십시오.
            </p>
            <p>
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

const formatPhoneNumber = (value: string) => {
  return value
    .replace(/\D+/g, '')
    .slice(0, 11)
    .split('')
    .map((digit, index) => {
      if (index === 2 || index === 6) {
        return digit + '-';
      }
      return digit;
    })
    .join('');
};
