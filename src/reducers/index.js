import {combineReducers } from "redux";
import errorReducer from "./errorReducers";
import userReducer from "./userReducers";

export default combineReducers({
    errors:errorReducer,
    userFromCombineReducer:userReducer
});