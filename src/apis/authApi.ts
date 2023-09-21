import { basicApi } from '../utils/config';

export interface ErrorResponse {
  status: string;
  timestamp: string;
  message: string;
  debugMessage: {
    [key: string]: string;
  };
}

export async function emailSignUp(data: {
  email: string;
  password: string;
  nickname: string;
  phoneNumber: string;
}) {
  const res = await basicApi({
    method: 'post',
    url: 'v1/member/direct',
    data: JSON.stringify(data),
  });
  return res.data;
}
