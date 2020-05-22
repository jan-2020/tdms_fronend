import { GET_PERMISSIONS,GET_PERMISSION,DELETE_PERMISSION } from "../actions/type";
const initialState={
	permissions:[],
	permission:{}
};

export default function(state=initialState,action) {
	switch(action.type){
		case GET_PERMISSIONS:
			return {
				...state,
				permissions:action.payload
			};
		case GET_PERMISSION:
			return {
				...state,
				permission:action.payload
			};


         default:
			return state;
	}
}