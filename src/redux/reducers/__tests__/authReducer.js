import '@babel/polyfill';
import authReducer from '../authReducer';
import {
  USER_LOGIN_SUCCESS,
  USER_LOGOUT
} from '../../actionTypes';

it('Should handle USER_LOGIN_SUCCESS', () => {
  const state = authReducer({}, {
    type: USER_LOGIN_SUCCESS,
    payload: {}
  });
  expect(state.isProcessing).toEqual(false);
  expect(state.isAuthenticated).toEqual(true);
});

it('Should handle USER_LOGIN_FAILURE', () => {
  const state = authReducer({}, {
    type: USER_LOGOUT,
    payload: {}
  });
  expect(state.isProcessing).toEqual(false);
  expect(state.isAuthenticated).toEqual(false);
});

