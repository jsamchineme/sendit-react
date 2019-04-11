import { USER_LOGIN_SUCCESS, USER_LOGOUT, } from '../actionTypes';

const initialState = {
  isProcessing: false,
  isAuthenticated: false
};

const authReducer = (state = initialState, action) => {
  switch(action.type) {
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        isProcessing: false,
        isAuthenticated: true
      };
     case USER_LOGOUT:
      return {
        ...state,
        isProcessing: false,
        isAuthenticated: false
      };
    default:
      return state;
  }
};

export default authReducer;