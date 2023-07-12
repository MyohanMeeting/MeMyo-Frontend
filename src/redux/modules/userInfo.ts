import { PatchUserInfoResponse } from './../../apis/api/mypage/patchUserInfo';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { GetUserInfoResponse } from '../../apis/api/mypage/getUserInfo';

export interface UserInfoState {
  getUserInfo: GetUserInfoResponse | null;
  patchUserInfo: PatchUserInfoResponse | null;
  error: string | null;
}

const initialState: UserInfoState = {
  getUserInfo: null,
  patchUserInfo: null,
  error: null,
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
  },
});

export const { getUserInfoFailure, getUserInfoSuccess, setUserInfo, patchUserInfoSuccess } =
  userInfoSlice.actions;

export default userInfoSlice.reducer;
