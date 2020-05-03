import { combineReducers } from 'redux';
import AuthenticationReducer from './AuthenticationReducer';
import AppReducer from './AppReducer';
import ContactsListReducer from './ContactsListReducer';

export default combineReducers({
  AuthenticationReducer,
  AppReducer,
  ContactsListReducer
});
