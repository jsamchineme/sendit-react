import {
  PARCEL_CREATE_FAILURE,
  PARCEL_CREATE_REQUEST,
  PARCEL_CREATE_SUCCESS,
  FETCH_PARCEL_FAILURE,
  FETCH_PARCEL_REQUEST,
  FETCH_PARCEL_SUCCESS,
  SHOW_SERVER_ERROR,
  CLEAR_SERVER_ERROR,
  DESTINATION_EDIT_FAILURE,
  DESTINATION_EDIT_REQUEST,
  DESTINATION_EDIT_SUCCESS
} from '../actionTypes';
import * as api from '../../utils/apiRequests';
import { retrieveAuthUser } from '../../utils/localStorage';
import { toast } from '../../components/common/Toast';

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

export const fetchParcel = (parcelId, successAction = _successAction, failAction = _failAction) => async dispatch => {

  dispatch({
    type: FETCH_PARCEL_REQUEST
  });

  try {
    const authUser = retrieveAuthUser();
    let data = { parcelId, token: authUser.token };

    // console.log({ parcelId, authUser });
    const response = await api.fetchAParcel(data);

    dispatch({
      type: FETCH_PARCEL_SUCCESS,
      payload: response.data
    });
    successAction(response.data);
  } catch(error) {
    dispatch({
      type: FETCH_PARCEL_FAILURE,
      payload: error.message
    });
    failAction();
  }
}

export const editDestination = (data, parcelId, successAction = _successAction, failAction = _failAction) => async dispatch => {

  dispatch({
    type: DESTINATION_EDIT_REQUEST
  });

  try {
    const authUser = retrieveAuthUser();
    console.log({toast});
    toast.show({ message: 'Request processing', autoHide: false, type: 'pending'});

    const response = await api.editDestination(data, parcelId, authUser.token);

    dispatch({
      type: DESTINATION_EDIT_SUCCESS,
      payload: response.data
    });
    successAction(response.data);
    toast.show({ message: 'Request completed', type: 'success'});
  } catch(error) {
    dispatch({
      type: DESTINATION_EDIT_FAILURE,
      payload: error.message
    });
    failAction();
  }
}