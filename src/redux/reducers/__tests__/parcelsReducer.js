import '@babel/polyfill';
import parcelsReducer from '../parcelsReducer';
import mockArtciles from '../../../__mocks__/articles';

import {
  PARCEL_CREATE_SUCCESS,
  FETCH_PARCEL_SUCCESS
} from '../../actionTypes';

it('Should handle PARCEL_CREATE_SUCCESS', () => {
  const state = parcelsReducer([], {
    type: PARCEL_CREATE_SUCCESS,
    payload: mockArtciles[0]
  });
  expect(state.length > 0).toEqual(true);
});

it('Should handle PARCEL_CREATE_SUCCESS', () => {
  const state = parcelsReducer([], {
    type: FETCH_PARCEL_SUCCESS,
    payload: mockArtciles[0]
  });
  expect(state.length > 0).toEqual(true);
});

