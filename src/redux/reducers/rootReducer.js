import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import signUp from './signUp';
import signIn from './signIn';

const rootReducer = combineReducers({
  signUp,
  signIn,
  form: formReducer,
})

export default rootReducer;
