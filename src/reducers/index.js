import { combineReducers } from 'redux';
import uReducer from './uReducer';


export default combineReducers({
    users: uReducer
});