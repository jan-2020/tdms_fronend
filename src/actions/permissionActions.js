
import axios from "axios";
import { GET_PERMISSIONS,GET_PERMISSION,DELETE_PERMISSION } from "./type";

export const createPermission=(newPermission,history)=>async dispatch=>{
	
		const res=await axios.post("http://localhost:8080/api/permission",newPermission);
		history.push("/dashboard");
	
};

export const getPermissions=()=>async dispatch=>{
	const res=await axios.get(`http://localhost:8086/api/permission/all/`);
	dispatch({
		type:GET_PERMISSIONS,
		payload:res.data
	})
};

export const deletePermission = id => async dispatch => {
  await axios.delete(`http://localhost:8086/ytdms/assignment/${id}`);
  dispatch({
    type: DELETE_PERMISSION,
    payload: id
  });
};

export const getPermission=(id,history)=>async dispatch=>{
	const res=await axios.get(`http://localhost:8086/api/permission/all/${id}`);
	console.log('res',res);
	dispatch({
		type:GET_PERMISSION,
		payload:res.data
	})
};



