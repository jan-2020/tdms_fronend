import axios from "axios";
import {  GET_LISTS, GET_LIST,DELETE_TRAINER} from "./type";


export const getLists = () => async dispatch => {
  const res = await axios.get("http://localhost:8080/api/trainer/all");
  dispatch({
    type: GET_LISTS,
    payload: res.data
  });
};
export const getList = (id, history) => async dispatch => {

  const res = await axios.get(`http://localhost:8080/api/trainer/document/${id}`);
  dispatch({
    type: GET_LIST,
    payload: res.data
  });
};
export const deleteTrainer = id => async dispatch => {
  await axios.delete(`http://localhost:8080/api/trainer/delete/${id}`);
  dispatch({
    type: DELETE_TRAINER ,
    payload: id       
  });
};

