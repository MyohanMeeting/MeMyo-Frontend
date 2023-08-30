import { createSlice } from '@reduxjs/toolkit';
import { MyNotice, UserInfo } from '@types/Mypage';

export interface MypageState {
  userInfo?: UserInfo;
  myNotice?: Array<MyNotice>;
}

const initialState: MypageState = {
  userInfo: {
    email: '',
    nickname: '',
    phoneNumber: '',
    profileImage: '',
    oauthType: '',
  },
  myNotice: [],
};

const mypageSlice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {
    getUserInfo: (state, action) => {
      state.userInfo = action.payload;
      return state;
    },
    getMyNotice: (state, action) => {
      state.myNotice = action.payload;
      return state;
    },
  },
});

export const { getUserInfo, getMyNotice } = mypageSlice.actions;

export default mypageSlice.reducer;
