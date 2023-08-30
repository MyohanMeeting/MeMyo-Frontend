import { createSlice } from '@reduxjs/toolkit';
import { MyAdoption, MyNotice, UserInfo } from '../../types/Mypage';

export interface MypageState {
  userInfo?: UserInfo;
  myNotice?: Array<MyNotice>;
  myAdoption?: Array<MyAdoption>;
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
  myAdoption: [],
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
    getMyAdoption: (state, action) => {
      state.myAdoption = action.payload;
      return state;
    },
  },
});

export const { getUserInfo, getMyNotice, getMyAdoption } = mypageSlice.actions;

export default mypageSlice.reducer;
