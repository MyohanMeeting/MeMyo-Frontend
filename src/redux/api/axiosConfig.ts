import axios from 'axios';

export const BASE_URL = 'https://myohanmeeting.github.io';

export const basicApi = axios.create({
  baseURL: BASE_URL,
  // timeout: 1000,
  withCredentials: true,
  headers: { 'Content-Type': 'application/json;charset=utf-8' },
});