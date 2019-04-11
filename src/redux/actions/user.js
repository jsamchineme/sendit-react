import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_FAILURE,
  USER_LOGIN_SUCCESS,
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_FAILURE,
  USER_SIGNUP_SUCCESS,
  SHOW_SERVER_ERROR,
  CLEAR_SERVER_ERROR,
  USER_LOGOUT
} from '../actionTypes';
import * as api from '../../utils/apiRequests';
import { persistAuthUser } from '../../utils/localStorage';

/**
 * Success action is the function that should be executed once
 * the request is successful. It is supplied by the caller.
 * It is an explicit function to be defined and supplied at the point
 * of calling this action, usually from within a component's event handler.
 * I just supplied a dummy function to use as a default.
 * This is to avoid doing if checks for the successAction and failAction arguments
 */

const _successAction = () => {};
const _failAction = () => {};

export const userLogin = (data, successAction = _successAction, failAction = _failAction) => async dispatch => {

  dispatch({
    type: USER_LOGIN_REQUEST
  });

  try {
    const response = await api.userLogin(data);
    const authUser = response.data;
    persistAuthUser(authUser);

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: response.data
    });
    dispatch({
      type: CLEAR_SERVER_ERROR,
      payload: { process: 'userLogin' }
    });
    successAction();
  } catch(error) {
    dispatch({
      type: USER_LOGIN_FAILURE,
      payload: error.message
    });
    dispatch({
      type: SHOW_SERVER_ERROR,
      payload: { process: 'userLogin', message: error.message }
    });
    failAction();
  }
}

export const userLogout = (data) => dispatch => {
  dispatch({
    type: USER_LOGOUT
  });
}

export const userSignup = (data, successAction = _successAction, failAction = _failAction) => async dispatch => {

  dispatch({
    type: USER_SIGNUP_REQUEST
  });

  try {
    const response = await api.userSignup(data);
    const authUser = response.data;
    persistAuthUser(authUser);

    dispatch({
      type: USER_SIGNUP_SUCCESS,
      payload: response.data
    });
    dispatch({
      type: CLEAR_SERVER_ERROR,
      payload: { process: 'userSignup' }
    });
    successAction();
  } catch(error) {
    dispatch({
      type: USER_SIGNUP_FAILURE,
      payload: error.message
    });
    dispatch({
      type: SHOW_SERVER_ERROR,
      payload: { process: 'userSignup', message: error.message }
    });
    failAction();
  }
}