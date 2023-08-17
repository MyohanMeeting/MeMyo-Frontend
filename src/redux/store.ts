import { configureStore } from '@reduxjs/toolkit'

import rootReducer from './reducer';

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => {
        const defaultMiddleware = getDefaultMiddleware({
            serializableCheck: false
        });
        return [...defaultMiddleware]
    }
})


export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
