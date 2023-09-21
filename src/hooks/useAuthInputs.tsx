import { useState, useCallback } from 'react';

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

function useAuthInputs() {
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
    nickname: '',
    phoneNumber: '',
  });

  const handleChangeInputs = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: name === 'phoneNumber' ? formatPhoneNumber(value) : value,
    }));
  }, []);

  return { inputs, handleChangeInputs };
}

export default useAuthInputs;
