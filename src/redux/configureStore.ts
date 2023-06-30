import { configureStore } from '@reduxjs/toolkit';
import recentPostReducer from './modules/recentPost';

export const store = configureStore({
  reducer: {
    recentPost: recentPostReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
