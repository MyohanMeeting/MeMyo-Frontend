import axios from 'axios';

const DUPLICATE_EMAIL_API_URL = '/v1/member/email';
const DUPLICATE_NICKNAME_API_URL = '/v1/member/nickname';

interface SuccessResonse {
  status: string;
  timestamp: string;
  message: string;
  data: {
    memberId: number;
  };
}

export const checkDuplicateEmailOrNickname = async (
  type: 'email' | 'nickname',
  stateValue: string
) => {
  const url = type === 'email' ? DUPLICATE_EMAIL_API_URL : DUPLICATE_NICKNAME_API_URL;

  try {
    const data = await axios<SuccessResonse>({
      method: 'GET',
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
      },
      url: `${url}?${type}=${stateValue}`,
    });

    return data.data;
  } catch (error) {
    throw error;
  }
};
