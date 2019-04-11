import { combineReducers } from 'redux';
import authReducer from './authReducer';
import { reducer as formReducer } from 'redux-form';
import serverErrorsReducer from './serverErrorsReducer';
import elementStatusesReducer from './elementStatusesReducer';

const allReducers = combineReducers({
  auth: authReducer,
  form: formReducer,
  serverErrors: serverErrorsReducer,
  elementStatuses: elementStatusesReducer,
});

export default allReducers;