import axios from "axios";
import { GET_ERRORS, GET_USERS, GET_USER} from "./type";


export const getUsers = () => async dispatch => {
  const res = await axios.get("http://localhost:8081/api/user/pendingrequest");
  dispatch({
    type: GET_USERS,
    payload: res.data
  });
};

