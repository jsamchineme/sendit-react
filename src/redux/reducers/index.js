import { combineReducers } from 'redux';
import authReducer from './authReducer';
import { reducer as formReducer } from 'redux-form';
import serverErrorsReducer from './serverErrorsReducer';

const allReducers = combineReducers({
  auth: authReducer,
  form: formReducer,
  serverErrors: serverErrorsReducer
});

export default allReducers;