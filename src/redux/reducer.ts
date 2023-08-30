import { combineReducers } from 'redux';
import adoptReducer from '@redux/slice/adoptSlice';
import localStorage from 'redux-persist/es/storage';
import { persistReducer } from 'redux-persist';
import userInfoSlice from './slice/mypageSlice';
import mypageSlice from './slice/mypageSlice';

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

const rootReducer = combineReducers({
  adopt: persistReducer(adoptPersistConfig, adoptReducer),
  mypage: mypageSlice,
});

export const persistedReducer = persistReducer(rootPersistConfig, rootReducer);
