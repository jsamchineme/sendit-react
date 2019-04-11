import { combineReducers } from 'redux';
import authReducer from './authReducer';
import { reducer as formReducer } from 'redux-form';
import serverErrorsReducer from './serverErrorsReducer';
import elementStatusesReducer from './elementStatusesReducer';
import parcelsReducer from './parcelsReducer';

const allReducers = combineReducers({
  auth: authReducer,
  form: formReducer,
  serverErrors: serverErrorsReducer,
  elementStatuses: elementStatusesReducer,
  parcels: parcelsReducer,
});

export default allReducers;