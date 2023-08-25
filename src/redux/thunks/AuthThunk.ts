import { createAsyncThunk } from '@reduxjs/toolkit';

import { basicApi } from '@redux/api/axiosConfig';
import { type ErrorResponse } from '@redux/slice/authSlice';
import { isAxiosError } from 'axios';

// 통신 에러 시 보여줄 에러 메세지의 타입
interface MyKnownError {
  errorMessage: string;
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
      // 200 SUCCESS, 400 INVALID PARAMETER 잘못된 요청, 403 UNCERTIFIED 이메일 미인증 회원
      // 405 METHOD_NOT_ALLOWED 잘못된 메서드 또는 URL 요청
      return thunkAPI.rejectWithValue({ errorMessage: error.response?.data.message || 'UNKNOWN' });
    }
    throw error;
  }
});
