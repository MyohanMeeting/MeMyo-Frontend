import { createSlice } from '@reduxjs/toolkit';
import { emailSigninThunk, kakaoSigninThunk, refreshTokenThunk } from '@redux/thunks/AuthThunk';

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
        console.log('emailSigninThunk loading');
        state.status = 'loading';
      })
      .addCase(emailSigninThunk.fulfilled, (state, action) => {
        console.log('emailSigninThunk successed');
        state.status = 'successed';
        state.accessToken = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
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
        state.status = 'successed';
        state.accessToken = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
      })
      .addCase(kakaoSigninThunk.rejected, (state, action) => {
        console.log('kakaoSigninThunk failed');
        state.status = 'failed';
        state.message = action.payload?.message;
      })
      .addCase(refreshTokenThunk.pending, (state) => {
        console.log('refreshTokenThunk loading');
        state.status = 'loading';
      })
      .addCase(refreshTokenThunk.fulfilled, (state, action) => {
        console.log('refreshTokenThunk successed');
        state.status = 'successed';
        state.accessToken = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
      })
      .addCase(refreshTokenThunk.rejected, (state, action) => {
        console.log('refreshTokenThunk failed');
        state.status = 'failed';
        state.message = action.payload?.message;
      });
  },
});

export const { removeAuth } = authSlice.actions;
export default authSlice.reducer;
