import { basicApi } from '../utils/config';

export async function emailSignUp(data: {
  email: string;
  password: string;
  nickname: string;
  phoneNumber: string;
}) {
  const res = await basicApi({
    method: 'POST',
    url: '/v1/member/direct',
    data: JSON.stringify(data),
  });
  return res.data;
}

export async function certificationEmail(certCode: string, email: string) {
  const res = await basicApi({
    method: 'PUT',
    url: `/v1/member/certification?certCode=${certCode}&email=${email}`,
  });
  return res.data;
}

export async function resendCertificationEmail(email: string) {
  const res = await basicApi({
    method: 'POST',
    url: `/v1/member/certification?email=${email}`,
  });
  return res.data;
}
