import { RootState } from '@redux/store';
import { createSlice } from '@reduxjs/toolkit';

import {
  emailSigninThunk,
  kakaoSigninThunk,
  refreshTokenThunk,
  signoutThunk,
} from '@redux/thunks/AuthThunk';

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
        // console.log('emailSigninThunk loading');
        state.status = 'loading';
      })
      .addCase(emailSigninThunk.fulfilled, (state, action) => {
        // console.log('emailSigninThunk successed');
        const { email, nickName, profileImageUrl, accessToken, refreshToken } = action.payload;
        state.status = 'successed';
        state.accessToken = accessToken;
        state.refreshToken = refreshToken;
        state.user = { email, nickName, profileImageUrl };
      })
      .addCase(emailSigninThunk.rejected, (state, action) => {
        // console.log('emailSigninThunk failed');
        state.status = 'failed';
        state.message = action.payload?.message;
      })
      .addCase(kakaoSigninThunk.pending, (state) => {
        // console.log('kakaoSigninThunk loading');
        state.status = 'loading';
      })
      .addCase(kakaoSigninThunk.fulfilled, (state, action) => {
        // console.log('kakaoSigninThunk successed');
        const { email, nickName, profileImageUrl, accessToken, refreshToken } = action.payload;
        state.status = 'successed';
        state.accessToken = accessToken;
        state.refreshToken = refreshToken;
        state.user = { email, nickName, profileImageUrl };
      })
      .addCase(kakaoSigninThunk.rejected, (state, action) => {
        // console.log('kakaoSigninThunk failed');
        state.status = 'failed';
        state.message = action.payload?.message;
      })
      .addCase(refreshTokenThunk.pending, (state) => {
        // console.log('refreshTokenThunk loading');
        state.status = 'loading';
      })
      .addCase(refreshTokenThunk.fulfilled, (state, action) => {
        // console.log('refreshTokenThunk successed');
        const { accessToken, refreshToken } = action.payload;
        state.status = 'successed';
        state.accessToken = accessToken;
        state.refreshToken = refreshToken;
      })
      .addCase(refreshTokenThunk.rejected, () => {
        // console.log('refreshTokenThunk failed');
        // state.status = 'failed';
        // state.message = action.payload?.message;
        return initialState;
      })
      .addCase(signoutThunk.fulfilled, () => {
        // console.log('signoutThunk successed');
        return initialState;
      })
      .addCase(signoutThunk.rejected, (state, action) => {
        // console.log('signoutThunk failed');
        state.message = action.payload?.message;
      });
  },
});

export const { removeAuth } = authSlice.actions;
export default authSlice.reducer;

export const selectCurrentUser = (state: RootState) => state.persistedReducer.auth.user;
export const selectCurrentToken = (state: RootState) => ({
  accessToken: state.persistedReducer.auth.accessToken,
  refreshToken: state.persistedReducer.auth.refreshToken,
});
