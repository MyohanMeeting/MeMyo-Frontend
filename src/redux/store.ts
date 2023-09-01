import { configureStore } from '@reduxjs/toolkit';
import { persistedReducer } from '@redux/reducer';
import { persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';

export const store = configureStore({
<<<<<<< HEAD
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => {
        const defaultMiddleware = getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: [
              FLUSH,
              REHYDRATE,
              PAUSE,
              PERSIST,
              PURGE,
              REGISTER,
            ],
          },
        });
        return [...defaultMiddleware];
    }    
})



=======
  reducer: persistedReducer,
  reducer: {
    persistedReducer,
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
>>>>>>> 4fa95e52cdb971b06bf736507553c905259ed8dc

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);

export default { store, persistor };
