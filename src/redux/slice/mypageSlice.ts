import { createSlice } from '@reduxjs/toolkit';
import { MyAdoption, MyNotice, UserInfo } from '../../types/Mypage';

export interface MypageState {
  userInfo?: UserInfo;
  myNotice?: Array<MyNotice>;
  myAdoption?: Array<MyAdoption>;
  newUserInfo?: Partial<UserInfo>;
  newUserProfileId?: number;
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
  newUserProfileId: 0,
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
      state.userInfo = action.payload;
      return state;
    },
    getUserProfileId: (state, action) => {
      state.newUserProfileId = action.payload;
      return state;
    },
  },
});

export const { getUserInfo, getMyNotice, getMyAdoption, setUserInfo, getUserProfileId } =
  mypageSlice.actions;

export default mypageSlice.reducer;
