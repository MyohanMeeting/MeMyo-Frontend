export const isEmailValid = (email: string) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email);

// 영문(대소문자 구분X), 숫자 하나씩 포함 8~24
export const isPasswordValid = (password: string) =>
  /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,24}$/.test(password);

// 공백 없이 모든 종류 문자 허용 최소2 최대12
export const isNicknameValid = (nickname: string) => /^\S{2,12}$/.test(nickname);

// "xxx-xxxx-xxxx"
export const isPhoneNumberValid = (phoneNumber: string) => /^\d{3}-\d{4}-\d{4}$/.test(phoneNumber);
