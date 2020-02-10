import {
  LOGIN_SUCCESS,
  REGISTER_SUCCESS,
  COMPANY_LOGIN_SUCCESS,
  COMPANY_REGISTER_SUCCESS,
  LOGOUT
} from "../actions/types";

const initialState = {
  token: localStorage.getItem("token"),
  errMsg: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      return {
        ...state,
        isAuthenticated: true
      };
    case COMPANY_LOGIN_SUCCESS:
    case COMPANY_REGISTER_SUCCESS:
      return {
        ...state,
        isAuthenticated: true
      };
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false
      };
    default:
      return state;
  }
}
