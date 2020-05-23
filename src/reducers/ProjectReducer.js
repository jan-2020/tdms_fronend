import { GET_LISTS, GET_LIST} from "../actions/type";
const initialState = {
  lists: [],
  list: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_LISTS:
      return {
        ...state,
        lists: action.payload
      };
    case GET_LIST:
      return {
        ...state,
        list: action.payload
      };
       
      default:
      return state;
  }
}