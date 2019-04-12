import { USER_LOGIN_SUCCESS, USER_LOGOUT, } from '../actionTypes';
import { retrieveAuthUser, clearAuthUser } from '../../utils/localStorage';

const authUser = retrieveAuthUser();

const initialState = {
  isProcessing: false,
  isAuthenticated: authUser === undefined ? false : true,
  authUser,
};

const authReducer = (state = initialState, action) => {
  let newState;
  switch(action.type) {
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        isProcessing: false,
        isAuthenticated: true
      };
     case USER_LOGOUT:
      newState = {
        ...state,
        isProcessing: false,
        isAuthenticated: false,
      };
      delete newState.authUser;
      clearAuthUser();
      return newState;
    default:
      return state;
  }
};

export default authReducer;