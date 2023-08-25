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
}

const initialState: AuthState = {
  accessToken: null,
  refreshToken: null,
  status: 'idle',
  message: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    removeAuth: (state) => {
      state.accessToken = null;
      state.refreshToken = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(emailSigninThunk.pending, (state) => {
        state.status = 'loading';
        console.log('emailSigninThunk loading');
      })
      .addCase(emailSigninThunk.fulfilled, (state, action) => {
        state.status = 'successed';
        state.accessToken = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
        console.log('emailSigninThunk successed');
      })
      .addCase(emailSigninThunk.rejected, (state, action) => {
        state.status = 'failed';
        state.message = action.payload?.message;
        console.log('emailSigninThunk failed');
      })
      .addCase(kakaoSigninThunk.pending, (state) => {
        state.status = 'loading';
        console.log('kakaoSigninThunk loading');
      })
      .addCase(kakaoSigninThunk.fulfilled, (state, action) => {
        state.status = 'successed';
        state.accessToken = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
        console.log('kakaoSigninThunk successed');
      })
      .addCase(kakaoSigninThunk.rejected, (state, action) => {
        state.status = 'failed';
        state.message = action.payload?.message;
        console.log('kakaoSigninThunk failed');
      });
  },
});

export const { removeAuth } = authSlice.actions;
export default authSlice.reducer;
