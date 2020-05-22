import axios from "axios";
import {  GET_LISTS, GET_LIST} from "./type";


export const getLists = () => async dispatch => {
  const res = await axios.get("http://localhost:8080/api/trainee/listOfAssignedDocuments");
  dispatch({
    type: GET_LISTS,
    payload: res.data
  });
};
export const getList = (id, history) => async dispatch => {

  const res = await axios.get(`http://localhost:8080/api/trainee/document/${id}`);
  dispatch({
    type: GET_LIST,
    payload: res.data
  });
};

