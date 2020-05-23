import {combineReducers} from 'redux';
import assignmentReducers from './assignmentReducers';
export default combineReducers ({
	assignments:assignmentReducers
});

