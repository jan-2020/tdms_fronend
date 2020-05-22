import axios from "axios";
import { GET_ASSIGNMENTS,GET_ASSIGNMENT,DELETE_ASSIGNMENT } from "./type";

export const createAssignment=(newProject,history)=>async dispatch=>{
	
		const res=await axios.post("http://localhost:8086/ytdms/assignment",newProject);
		history.push("/listAssignment");
	
};

export const getAssignments=()=>async dispatch=>{
	const res=await axios.get("http://localhost:8086/ytdms/assignment/all");
	dispatch({
		type:GET_ASSIGNMENTS,
		payload:res.data
	})
};

export const deleteAssignment = id => async dispatch => {
  await axios.delete(`http://localhost:8086/ytdms/assignment/${id}`);
  dispatch({
    type: DELETE_ASSIGNMENT,
    payload: id
  });
};

export const getAssignment=(id,history)=>async dispatch=>{
	const res=await axios.get(`http://localhost:8086/ytdms/assignment/${id}`);
	console.log('res',res);
	dispatch({
		type:GET_ASSIGNMENT,
		payload:res.data
	})
};

