import { PatchUserInfoResponse } from '../../apis/api/mypage/patchUserInfo';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { GetUserInfoResponse } from '../../apis/api/mypage/getUserInfo';

export interface UserInfoState {
  getUserInfo: GetUserInfoResponse | null;
  patchUserInfo: PatchUserInfoResponse | null;
  error: string | null;
  currentPassword: string;
  newPassword: string;
}

const initialState: UserInfoState = {
  getUserInfo: null,
  patchUserInfo: null,
  error: null,
  currentPassword: '',
  newPassword: '',
};

const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {
    getUserInfoSuccess: (state, action: PayloadAction<GetUserInfoResponse>) => {
      state.getUserInfo = action.payload;
    },
    getUserInfoFailure: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    patchUserInfoSuccess: (state, action: PayloadAction<PatchUserInfoResponse>) => {
      state.patchUserInfo = action.payload;
    },
    setUserInfo: (state, action: PayloadAction<any>) => {
      state.getUserInfo = action.payload;
    },
    setUserCurrentPassword: (state, action: PayloadAction<any>) => {
      state.currentPassword = action.payload;
    },
    setUserNewPassword: (state, action: PayloadAction<any>) => {
      state.newPassword = action.payload;
    },
  },
});

export const {
  getUserInfoFailure,
  getUserInfoSuccess,
  setUserInfo,
  patchUserInfoSuccess,
  setUserCurrentPassword,
  setUserNewPassword,
} = userInfoSlice.actions;

export default userInfoSlice.reducer;
