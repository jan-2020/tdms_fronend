import {combineReducers} from 'redux';
import errorReducer from './errorReducer';
import projectReducer from './ProjectReducer';



export default combineReducers({
    errors:errorReducer,
    groups:projectReducer
});