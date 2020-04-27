import { combineReducers } from 'redux';
import AuthenticationReducer from './AuthenticationReducer';
import AppReducer from './AppReducer';

export default combineReducers({
  AuthenticationReducer,
  AppReducer
});
