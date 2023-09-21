import { isAxiosError } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { basicApi } from '@redux/api/axiosConfig';
import type {
  ErrorResponse,
  SigninResponse,
  SigninResponseData,
  RefreshTokenData,
  RefreshTokenResponse,
} from '../../types/Auth';

interface MyKnownError {
  message: string;
}

export const signoutThunk = createAsyncThunk<null, string, { rejectValue: MyKnownError }>(
  'auth/signout',
  async (token, thunkAPI) => {
    try {
      const res = await basicApi<SigninResponse>({
        method: 'POST',
        url: '/v1/auth/signin/direct',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(res);
      return null;
    } catch (error) {
      if (isAxiosError<ErrorResponse, any>(error)) {
        return thunkAPI.rejectWithValue({ message: error.response?.data.status || 'UNKNOWN' });
      }
      throw error;
    }
  }
);

export const emailSigninThunk = createAsyncThunk<
  SigninResponseData,
  { email: string; password: string },
  { rejectValue: MyKnownError }
>('auth/emailSignin', async (inputs, thunkAPI) => {
  try {
    const res = await basicApi<SigninResponse>({
      method: 'POST',
      url: '/v1/auth/signin/direct',
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

export const refreshTokenThunk = createAsyncThunk<
  RefreshTokenData,
  string,
  { rejectValue: MyKnownError }
>('auth/refreshTokenThunk', async (refreshToken, thunkAPI) => {
  try {
    const res = await basicApi<RefreshTokenResponse>({
      method: 'POST',
      url: '/v1/auth/refresh',
      data: JSON.stringify({ refreshToken }),
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
