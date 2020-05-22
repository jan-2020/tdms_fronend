import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import UserReducer from "./UserReducer";

export default combineReducers({
  errors: errorReducer,
  users: UserReducer
});
