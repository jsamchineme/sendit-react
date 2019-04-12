import '@babel/polyfill';
import serverErrorsReducer from '../serverErrorsReducer';
import {
  SHOW_SERVER_ERROR,
  CLEAR_SERVER_ERROR
} from '../../actionTypes';

it('Should handle SHOW_SERVER_ERROR', () => {
  const state = serverErrorsReducer({}, {
    type: SHOW_SERVER_ERROR,
    payload: {process: 'someProcess', message: 'Some Error'}
  });
  expect(Object.keys(state).length >= 1).toEqual(true);
  expect(state.someProcess !== undefined).toEqual(true);
});

it('Should handle CLEAR_SERVER_ERROR', () => {
  const state = serverErrorsReducer({}, {
    type: CLEAR_SERVER_ERROR,
    payload: {process: 'someProcess'}
  });
  expect(Object.keys(state).length === 0).toEqual(true);
  expect(state.someProcess === undefined).toEqual(true);
});