import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import localStorage from 'redux-persist/es/storage';

import authReducer from '@redux/slice/authSlice';
import adoptReducer from '@redux/slice/adoptSlice';

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
  adopt: persistReducer(adoptPersistConfig, adoptReducer),
  auth: persistReducer(authPersistConfig, authReducer),
});

// export type RootState = ReturnType<typeof rootReducer>;

export const persistedReducer = persistReducer(rootPersistConfig, rootReducer);
