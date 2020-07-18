import { combineReducers } from 'redux';
import { footballReducer } from './footballReducer';



export const rootReducer = combineReducers({
    footballApp: footballReducer
})