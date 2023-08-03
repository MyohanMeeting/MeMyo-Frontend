import { combineReducers } from 'redux';
import adoptReducer from './slice/adoptSlice'

const rootReducer = combineReducers({
    adopt: adoptReducer
});

export default rootReducer;