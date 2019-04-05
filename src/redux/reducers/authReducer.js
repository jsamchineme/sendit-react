import { USER_LOGIN_SUCCESS } from '../actionTypes';

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
    default:
      return state;
  }
};

export default authReducer;