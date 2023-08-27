import { createAsyncThunk } from '@reduxjs/toolkit';

import { isAxiosError } from 'axios';
import { basicApi } from '@redux/api/axiosConfig';

interface ErrorResponse {
  status: string;
  timestamp: string;
  message: string;
  debugMessage: {
    [key: string]: string;
  };
}

interface MyKnownError {
  message: string;
}

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

export const emailSigninThunk = createAsyncThunk<
  SigninResponseData,
  { email: string; password: string },
  { rejectValue: MyKnownError }
>('auth/emailSignin', async (inputs, thunkAPI) => {
  try {
    const res = await basicApi<SigninResponse>({
      method: 'POST',
      url: '/v1/auth/signin/direct',
      headers: {
        withCredentials: true,
      },
      data: JSON.stringify(inputs),
    });
    return res.data.data;
  } catch (error) {
    if (isAxiosError<ErrorResponse, any>(error)) {
      return thunkAPI.rejectWithValue({ message: error.response?.data.status || 'UNKNOWN' });
    }
    throw error;
  }
});

export const kakaoSigninThunk = createAsyncThunk<
  SigninResponseData,
  number,
  { rejectValue: MyKnownError }
>('auth/kakaoSignin', async (oauthId, thunkAPI) => {
  try {
    const res = await basicApi<SigninResponse>({
      method: 'POST',
      url: '/v1/auth/signin/oauth',
      headers: {
        withCredentials: true,
      },
      data: JSON.stringify({
        oauthType: 'KAKAOTALK',
        oauthId,
      }),
    });
    return res.data.data;
  } catch (error) {
    if (isAxiosError<ErrorResponse, any>(error)) {
      return thunkAPI.rejectWithValue({
        message: error.response?.data.status || 'UNKNOWN',
      });
    }
    throw error;
  }
});
