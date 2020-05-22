import axios from "axios";
import { GET_ERRORS, GET_LISTS, GET_LIST} from "./type";

export const uploadFile = (assignment,id,history) => async dispatch => {
  try {
    
    const res = await axios.post(`http://localhost:8080/api/trainee/upload/1/${id}`, assignment);
    history.push("/assignments");
   } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error.response.data
    });
  }
};

export const getLists = () => async dispatch => {
  const res = await axios.get("http://localhost:8080/api/trainee/listOfAssignedAssignments");
  dispatch({
    type: GET_LISTS,
    payload: res.data
  });
};
export const getList = (id, history) => async dispatch => {

  const res = await axios.get(`http://localhost:8080/api/trainee/assignment/${id}`);
  dispatch({
    type: GET_LIST,
    payload: res.data
  });
};

