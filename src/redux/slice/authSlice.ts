import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { emailSigninThunk } from '@redux/thunks/AuthThunk';
import LocalStorageTokenStorage from '../../utils/tokenStorage';

const tokenStorage = new LocalStorageTokenStorage();

interface AuthState {
  accessToken: string | null;
  refreshToken: string | null;
  status: 'idle' | 'loading' | 'successed' | 'failed';
}

const initialState: AuthState = {
  accessToken: tokenStorage.loadAccessToken(),
  refreshToken: tokenStorage.loadRefreshToken(),
  status: 'idle',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<{ accessToken: string; refreshToken: string }>) => {
      const { accessToken, refreshToken } = action.payload;
      state.accessToken = accessToken;
      state.refreshToken = refreshToken;
    },
    removeAuth: (state) => {
      state.accessToken = null;
      state.refreshToken = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(emailSigninThunk.pending, (state) => {
        state.status = 'loading';
        console.log('loading');
      })
      .addCase(emailSigninThunk.fulfilled, (state, action) => {
        state.status = 'successed';
        console.log('successed', action.type);
      })
      .addCase(emailSigninThunk.rejected, (state, action) => {
        state.status = 'failed';
        console.log('failed', action.type);
      });
  },
});

export const { setAuth, removeAuth } = authSlice.actions;
export default authSlice.reducer;
