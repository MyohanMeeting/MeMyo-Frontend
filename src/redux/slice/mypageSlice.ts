import { createSlice } from '@reduxjs/toolkit';
import { MyAdoption, MyNotice, UserInfo } from '../../types/Mypage';

export interface MypageState {
  userInfo?: UserInfo;
  myNotice?: Array<MyNotice>;
  myAdoption?: Array<MyAdoption>;
  newUserInfo?: Partial<UserInfo>;
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
  newUserInfo: {},
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
    setUserInfo: (state, action) => {
      state.newUserInfo = action.payload;
    },
  },
});

export const { getUserInfo, getMyNotice, getMyAdoption, setUserInfo } = mypageSlice.actions;

export default mypageSlice.reducer;
