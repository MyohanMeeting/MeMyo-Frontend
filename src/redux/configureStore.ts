import { configureStore } from '@reduxjs/toolkit';
import recentPostReducer from './modules/recentPost';
import userInfo from './modules/userInfo';

export const store = configureStore({
  reducer: {
    recentPost: recentPostReducer,
    userInfo: userInfo,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
