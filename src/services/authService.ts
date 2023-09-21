import { basicApi } from '@redux/api/axiosConfig';

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

// interface ErrorResponse {
//   status: string;
//   timestamp: string;
//   message: string;
//   debugMessage: {
//     [key: string]: string;
//   };
// }

export const checkDuplicateEmailOrNickname = async (
  type: 'email' | 'nickname',
  stateValue: string
) => {
  const url = type === 'email' ? DUPLICATE_EMAIL_API_URL : DUPLICATE_NICKNAME_API_URL;

  try {
    const data = await basicApi<SuccessResonse>({
      method: 'GET',
      url: `${url}?${type}=${stateValue}`,
    });

    return data.data;
  } catch (error) {
    throw error;
  }
};
