import {
  SHOW_SERVER_ERROR,
  CLEAR_SERVER_ERROR
} from '../actionTypes';

const initialState = {
  userLogin: '',
  userSignup: ''
};

const serverErrorsReducer = (state = initialState, action) => {
  let newState;

  switch(action.type) {
    case SHOW_SERVER_ERROR:
      return {
        ...state,
        [action.payload.process]: action.payload.message
      };
    case CLEAR_SERVER_ERROR:
      newState = {...state};
      delete newState[action.payload.process];
      return newState;
    default:
      return state;
  }
}

export default serverErrorsReducer;