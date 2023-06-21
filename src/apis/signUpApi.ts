import { basicApi } from '../utils/config';

export async function oauthSignUp(data: {
  oauthType: 'KAKAOTALK';
  oauthId: string;
  email: string;
}) {
  const res = await basicApi.post('/member/oauth', data);
  return res.data;
}

export async function checkDuplicateEmail(data: { email: string }) {
  const res = await basicApi.get(`/member/email?email=${data.email}`);
  return res.data;
}

export async function checkCertificationEmailCode(data: { uuid: string }) {
  const res = await basicApi.put('/member/certification', data.uuid);
  return res.data;
}

export async function sendCertificationEmail(data: { email: string }) {
  const res = await basicApi.post('/member/certification', data.email);
  return res.data;
}

export async function directSignUp(data: {
  email: string;
  name: string;
  password: string;
  nickName: string;
  phoneNumber: string;
}) {
  const res = await basicApi.post('/member/direct', data);
  return res.data;
}

export async function checkDuplicateNickName(data: { nickName: string }) {
  const res = await basicApi.get(`/member/nickName?nickName=${data.nickName}`);
  return res.data;
}
