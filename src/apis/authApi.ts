import { basicApi } from '../utils/config';

export async function oauthSignIn(data: { oauthType: 'KAKAOTALK'; oauthId: string }) {
  const res = await basicApi.post('/auth/signIn/oauth', data);
  return res.data;
}

export async function directSignIn(data: { email: string; password: string }) {
  const res = await basicApi.post('/auth/signIn/direct', data);
  return res.data;
}

export async function refreshToken(data: { refreshToken: string }) {
  const res = await basicApi.post('/auth/refresh', data);
  return res.data;
}

export async function signOut() {
  const res = await basicApi.get('/auth/signOut');
  return res.data;
}
