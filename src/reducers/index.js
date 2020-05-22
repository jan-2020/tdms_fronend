import {combineReducers} from 'redux';
import permissionReducers from './permissionReducers';
export default combineReducers ({
	permissions:permissionReducers
});

