import axios from 'axios';

export const BASE_URL = 'http://localhost:5173';

export const basicApi = axios.create({
  baseURL: `${BASE_URL}`,
  timeout: 1000,
  headers: { 'Content-Type': 'application/json;charset=utf-8' },
});
