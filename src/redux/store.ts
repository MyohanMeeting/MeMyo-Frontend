import { configureStore } from '@reduxjs/toolkit';
import { persistedReducer } from '@redux/reducer';
import { persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import recentPost from './slice/recentPostSlice';
import favoriteFriendSlice from './slice/favoriteFriendSlice';

export const store = configureStore({
  reducer: {
    persistedReducer,
    recentPost,
    favoriteFriend: favoriteFriendSlice,
  },
  middleware: (getDefaultMiddleware) => {
    const defaultMiddleware = getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
    return [...defaultMiddleware];
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
export default store;
