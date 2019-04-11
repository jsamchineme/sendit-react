import { PARCEL_CREATE_SUCCESS, FETCH_PARCEL_SUCCESS } from '../actionTypes';


const parcelsReducer = (state = [], action) => {
  switch(action.type) {
    case PARCEL_CREATE_SUCCESS:
      return [...state, action.payload];
    case FETCH_PARCEL_SUCCESS:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default parcelsReducer;