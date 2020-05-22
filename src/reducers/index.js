import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import DocumentReducer from "./DocumentReducer";
export default combineReducers({
  errors: errorReducer,
  documents: DocumentReducer,
});
