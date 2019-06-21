import {FETCHING, SUCCESS, FAILURE} from "../actions";
const initialState = {
  characters: [],
  fetching: false,
  error: ''
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  console.log('charsReducer', action);
  console.log('charsReducer', state);
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FETCHING:
      return {
        ...state,
        isFetching: true
      };
    case SUCCESS:
      return {
        ...state,
        characters: action.payload,
        isFetching: false,
      };
    case FAILURE:
      return {
        ...state,
        error: action.payload.error
      };
    default:
      return state;
  }
};
