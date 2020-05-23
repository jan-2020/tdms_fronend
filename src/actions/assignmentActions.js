import axios from "axios";
import { GET_ASSIGNMENTS,GET_ASSIGNMENT,DELETE_ASSIGNMENT } from "./type";

export const createAssignment=(newProject,history)=>async dispatch=>{
	
		const res=await axios.post("http://localhost:8086/ytdms/assignment",newProject);
		history.push("/listAssignment");
	
};

export const getAssignments=()=>async dispatch=>{
	const res=await axios.get("http://localhost:8086/tdms/assignment/all");
	dispatch({
		type:GET_ASSIGNMENTS,
		payload:res.data
	})
};


