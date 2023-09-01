import { combineReducers } from 'redux';
import authReducer from '@redux/slice/authSlice';
import adoptReducer from '@redux/slice/adoptSlice';
import localStorage from 'redux-persist/es/storage';
import { persistReducer } from 'redux-persist';
import mypageSlice from './slice/mypageSlice';
import favoriteFriendSlice from './slice/favoriteFriendSlice';
import recentPostSlice from './slice/recentPostSlice';

const rootPersistConfig = {
  key: 'root',
  storage: localStorage,
  blacklist: ['adopt'],
};

const adoptPersistConfig = {
  key: 'adopt-regist',
  storage: localStorage,
  whitelist: ['adoptForm'],
};

const authPersistConfig = {
  key: 'auth',
  storage: localStorage,
  whitelist: ['accessToken', 'refreshToken', 'user'],
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  adopt: persistReducer(adoptPersistConfig, adoptReducer),
  mypage: mypageSlice,
  recentPost: recentPostSlice,
  favoriteFriend: favoriteFriendSlice,
});

export const persistedReducer = persistReducer(rootPersistConfig, rootReducer);
