import {
  SET_USER,
  USER_END,
  USER_FAILURE,
  USER_START,
  USER_SUCCESS,
} from "../actions/types";

const initialState = {
  users: [],
  loading: false,
  error: false,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        users: action.payload,
      };
    case USER_START:
      return {
        ...state,
        loading: true,
      };
    case USER_END:
      return {
        ...state,
        loading: false,
      };
    case USER_SUCCESS:
      return {
        ...state,
        error: false,
      };
    case USER_FAILURE:
      return {
        ...state,
        error: true,
      };
    default:
      return state;
  }
}
