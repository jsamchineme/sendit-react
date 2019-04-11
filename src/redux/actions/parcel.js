import {
  PARCEL_CREATE_FAILURE,
  PARCEL_CREATE_REQUEST,
  PARCEL_CREATE_SUCCESS,
  SHOW_SERVER_ERROR,
  CLEAR_SERVER_ERROR
} from '../actionTypes';
import * as api from '../../utils/apiRequests';
import { persistAuthUser, retrieveAuthUser } from '../../utils/localStorage';

const _successAction = () => {};
const _failAction = () => {};

export const createOrder = (data, successAction = _successAction, failAction = _failAction) => async dispatch => {

  dispatch({
    type: PARCEL_CREATE_REQUEST
  });

  try {
    const authUser = retrieveAuthUser();
    const response = await api.createOrder(data, authUser.token);

    dispatch({
      type: PARCEL_CREATE_SUCCESS,
      payload: response.data
    });
    dispatch({
      type: CLEAR_SERVER_ERROR,
      payload: { process: 'orderCreate' }
    });
    successAction(response.data);
  } catch(error) {
    dispatch({
      type: PARCEL_CREATE_FAILURE,
      payload: error.message
    });
    dispatch({
      type: SHOW_SERVER_ERROR,
      payload: { process: 'orderCreate', message: error.message }
    });
    failAction();
  }
}