import { createAsyncThunk } from '@reduxjs/toolkit';

import { basicApi } from '@redux/api/axiosConfig';
import { setAuth } from '@redux/slice/authSlice';

interface SigninResponseData {
  accessToken: string;
  refreshToken: string;
}

interface SigninResponse {
  status: string;
  timestamp: string;
  message: string;
  data: SigninResponseData;
}

export const emailSigninThunk = createAsyncThunk(
  'auth/emailSignin',
  async (inputs: { email: string; password: string }, thunkApi) => {
    try {
      const res = await basicApi<SigninResponse>({
        method: 'POST',
        url: '/v1/auth/signin/direct',
        headers: {
          withCredentials: true,
        },
        data: JSON.stringify(inputs),
      });
      if (res) {
        thunkApi.dispatch(setAuth(res.data.data));
      }
    } catch (error) {
      throw error;
    }
  }
);
