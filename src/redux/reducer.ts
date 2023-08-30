import { combineReducers } from 'redux';
import adoptReducer from '@redux/slice/adoptSlice';
import localStorage from 'redux-persist/es/storage';
import { persistReducer } from 'redux-persist';
import recentPost from './slice/recentPostSlice';
import favoriteFriendSlice from './slice/favoriteFriendSlice';

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
  recentPost: recentPost,
  favorite: favoriteFriendSlice,
});

export const persistedReducer = persistReducer(rootPersistConfig, rootReducer);
