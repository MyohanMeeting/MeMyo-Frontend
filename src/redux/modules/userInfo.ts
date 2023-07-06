import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { GetUserInfoResponse } from '../../apis/api/mypage/getUserInfo';

interface UserInfoState {
  userInfo: {
    memberId: number;
    email: string;
    name: string;
    nickName: string;
    profileImage: {
      uploadId: number;
      url: string;
    };
    phoneNumber: string;
    certified: string;
    createAt: string;
  }[];
  error: string | null;
}

const initialState: UserInfoState = {
  userInfo: [],
  error: null,
};

const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {
    getUserInfoSuccess: (state, action: PayloadAction<GetUserInfoResponse>) => {
      state.userInfo = action.payload.userInfo;
    },
    getUserInfoFailure: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },
});

export const { getUserInfoFailure, getUserInfoSuccess } = userInfoSlice.actions;

export default userInfoSlice.reducer;
