import axios from "axios";
import  {GET_ERRORS,USER_LOGIN} from "./type";

export const loginUser = (user,history) => async dispatch => {
    try{
        console.log("==>>",user);
        const res = await axios.post("http://localhost:8080/tdms/login",user);
        console.log('response in react',res);
                history.push("/traineeDashboard");
        dispatch({
            type:USER_LOGIN,
            payload:res.data
        });
    }
    catch(error)
        {
            dispatch({
                type: GET_ERRORS,
                payload: error.response.data
            });
       }
};



//export const loginUser = (user,history) => async dispatch => {
 //   try{
//        console.log("==>>",user);
//        const res = await axios.get(`http://localhost:8087/tdms/logincheck/${user.userName}/${user.password}`);
//        console.log('response in react',res);
        
//         history.push("/traineeDashboard");
//        dispatch({
//            type:USER_LOGIN,
//            payload:res.data
//        });
 //   }
//    catch(error)
 //       {
 //           dispatch({
 //               type: GET_ERRORS,
 //               payload: error.response.data
 //          });
 //     }
//};

//export const loginUser = (userName,password,history) => async dispatch =>{
//    try{
//        const res=await axios.get(`http://localhost:8087/tdms/logincheck/${userName}/${password}`);
//         history.push("/dashboard");
//    }
//    catch(error)
//        {
//            dispatch({
//                type: GET_ERRORS,
//                payload: error.response.data
//            });
//        }
//};