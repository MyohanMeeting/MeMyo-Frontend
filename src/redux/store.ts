import { configureStore } from '@reduxjs/toolkit'
<<<<<<< HEAD
import localStorage from 'redux-persist/es/storage';
import rootReducer from './reducer';
import {
    persistReducer,
=======
import { persistedReducer } from '@redux/reducer';
import {
>>>>>>> develop
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
<<<<<<< HEAD
    REGISTER
} from 'redux-persist';
import { AdoptState } from './slice/adoptSlice';


const adoptFormStateReconciler = <AdoptState>(inboundState:any, originalState:AdoptState, reducedState:AdoptState) => {
  // inboundState: 로컬 스토리지에서 가져온 상태
  // originalState: 현재 스토어의 원래 상태
  // reducedState: 현재 스토어의 리듀서로 처리된 상태

  // 'adopt' 키에 해당하는 상태만 로컬 스토리지에서 가져옵니다.
console.log('reducer',reducedState)
  
  const adoptFormState = inboundState && inboundState.adoptForm ? inboundState.adoptForm : {};

  // 리덕스 상태를 조합하여 최종 상태를 반환합니다.
  return {
    ...reducedState, // 다른 상태는 그대로 유지
      adopt: adoptFormState, // adoptForm 상태만 덮어쓰기
  };
};


const persistConfig = {
    key: "adopt-regist",
    storage: localStorage,
    whitelist:['adopt']
}

const persistedReducer = persistReducer(persistConfig, rootReducer);
=======
    REGISTER,
} from 'redux-persist';







>>>>>>> develop

export const store = configureStore({
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
                    REGISTER
                ]
            }
        });
        return [...defaultMiddleware];
    }    
})




export type RootState = ReturnType<typeof store.getState>;


export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
export default store;