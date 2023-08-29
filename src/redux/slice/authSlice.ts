import { RootState } from '@redux/store';
import { createSlice } from '@reduxjs/toolkit';

import { emailSigninThunk, kakaoSigninThunk } from '@redux/thunks/AuthThunk';

export interface MessageResponse {
  status: string;
  timestamp: string;
  message: string;
  debugMessage: string;
}

interface AuthState {
  accessToken: string | null;
  refreshToken: string | null;
  status: 'idle' | 'loading' | 'successed' | 'failed';
  message: string | null | undefined;
  user: { email: string; nickName: string; profileImageUrl: string } | null;
}

const initialState: AuthState = {
  accessToken: null,
  refreshToken: null,
  status: 'idle',
  message: null,
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    removeAuth: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(emailSigninThunk.pending, (state) => {
        console.log('emailSigninThunk loading');
        state.status = 'loading';
      })
      .addCase(emailSigninThunk.fulfilled, (state, action) => {
        console.log('emailSigninThunk successed');
        const { email, nickName, profileImageUrl, accessToken, refreshToken } = action.payload;
        state.status = 'successed';
        state.accessToken = accessToken;
        state.refreshToken = refreshToken;
        state.user = { email, nickName, profileImageUrl };
      })
      .addCase(emailSigninThunk.rejected, (state, action) => {
        console.log('emailSigninThunk failed');
        state.status = 'failed';
        state.message = action.payload?.message;
      })
      .addCase(kakaoSigninThunk.pending, (state) => {
        console.log('kakaoSigninThunk loading');
        state.status = 'loading';
      })
      .addCase(kakaoSigninThunk.fulfilled, (state, action) => {
        console.log('kakaoSigninThunk successed');
        const { email, nickName, profileImageUrl, accessToken, refreshToken } = action.payload;
        state.status = 'successed';
        state.accessToken = accessToken;
        state.refreshToken = refreshToken;
        state.user = { email, nickName, profileImageUrl };
      })
      .addCase(kakaoSigninThunk.rejected, (state, action) => {
        console.log('kakaoSigninThunk failed');
        state.status = 'failed';
        state.message = action.payload?.message;
      });
  },
});

export const { removeAuth } = authSlice.actions;
export default authSlice.reducer;

export const selectCurrentUser = (state: RootState) => state.auth.user;
export const selectCurrentAccessToken = (state: RootState) => state.auth.accessToken;
export const selectCurrentRefreshToken = (state: RootState) => state.auth.refreshToken;
