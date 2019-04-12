import { 
  PARCEL_CREATE_SUCCESS, 
  FETCH_PARCEL_SUCCESS, 
  FETCH_USER_PARCELS_SUCCESS
} from '../actionTypes';


const parcelsReducer = (state = [], action) => {
  switch(action.type) {
    case PARCEL_CREATE_SUCCESS:
      return [...state, action.payload];
    case FETCH_PARCEL_SUCCESS:
      return [...state, action.payload];
    case FETCH_USER_PARCELS_SUCCESS:
      return [...state, ...action.payload];
    default:
      return state;
  }
};

export default parcelsReducer;