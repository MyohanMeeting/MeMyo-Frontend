import { createSlice } from '@reduxjs/toolkit';

import { emailSigninThunk, kakaoSigninThunk } from '@redux/thunks/AuthThunk';

export interface ErrorResponse {
  status: string;
  timestamp: string;
  message: string;
  debugMessage: string;
}

interface AuthState {
  accessToken: string | null;
  refreshToken: string | null;
  status: 'idle' | 'loading' | 'successed' | 'failed';
  error: string | null | undefined;
}

const initialState: AuthState = {
  accessToken: null,
  refreshToken: null,
  status: 'idle',
  error: null,
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
        state.error = action.payload?.errorMessage;
        console.log('emailSigninThunk failed');
      });
  },
});

export const { removeAuth } = authSlice.actions;
export default authSlice.reducer;
