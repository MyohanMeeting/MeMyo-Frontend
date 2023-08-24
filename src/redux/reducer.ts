import { combineReducers } from 'redux';
import adoptReducer from '@redux/slice/adoptSlice'
import localStorage from 'redux-persist/es/storage';
import { persistReducer } from 'redux-persist';

const rootPersistConfig = {
    key: 'root',
    storage: localStorage,
    blacklist:['adopt']
}

const adoptPersistConfig = {
    key: "adopt-regist",
    storage: localStorage,
    whitelist: ['adoptForm']
}


const rootReducer = combineReducers({
    adopt: persistReducer(adoptPersistConfig, adoptReducer)
});

export const persistedReducer = persistReducer(rootPersistConfig,rootReducer);