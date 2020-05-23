import axios from 'axios';
import {GET_ERRORS,GET_GROUPS} from './type';

export const createUser=(user,history)=>async dispatch=>{
    try{
        const res=await axios.post
        ("http://localhost:8080/tdms/user",user);
    }
    catch(error){
        dispatch({
            type:GET_ERRORS,
            payload:error.response.data
        })
    }
}

export const getGroups=()=>async dispatch=>{
    const res=await axios.get
    ("http://localhost:8080/tdms/groups/all")
    dispatch({
        type:GET_GROUPS,
        payload:res.data
    })
}