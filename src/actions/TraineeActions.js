import axios from "axios";
import {  GET_LISTS, GET_LIST,DELETE_TRAINEE,CHANGE_STATUS }from "./type";


export const getLists = () => async dispatch => {
  const res = await axios.get("http://localhost:8080/api/trainee/all");
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
export const deleteTrainee = id => async dispatch => {
  await axios.delete(`http://localhost:8080/api/trainee/delete/${id}`);
  dispatch({
    type: DELETE_TRAINEE ,
    payload: id       
  });
};
export const changeStatus = id => async dispatch => {
  await axios.get(`http://localhost:8080/api/trainee/changeStatus/${id}`);
  dispatch({
    type: CHANGE_STATUS ,
    payload: id       
  });
};

