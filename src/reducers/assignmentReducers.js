import { GET_ASSIGNMENTS,GET_ASSIGNMENT,DELETE_ASSIGNMENT } from "../actions/type";
const initialState={
	assignments:[],
	assignment:{}
};

export default function(state=initialState,action) {
	switch(action.type){
		case GET_ASSIGNMENTS:
			return {
				...state,
				assignments:action.payload
			};
		case GET_ASSIGNMENT:
			return {
				...state,
				assignment:action.payload
			};

			case DELETE_ASSIGNMENT:
      return {
        ...state,
        assignments: state.assignments.filter(
          assignment => assignment.id != action.payload
        )
      };


         default:
			return state;
	}
}