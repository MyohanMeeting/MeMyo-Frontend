import { configureStore } from '@reduxjs/toolkit';
import recentPostReducer from './modules/recentPost';
import favoriteCatReducer from './modules/favoriteCat';

export const store = configureStore({
  reducer: {
    recentPost: recentPostReducer,
    favoriteCat: favoriteCatReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
