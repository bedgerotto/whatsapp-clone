import { combineReducers } from 'redux';
import AuthenticationReducer from './AuthenticationReducer';
import AppReducer from './AppReducer';
import ContactsList from './ContactsListReducer';

export default combineReducers({
  AuthenticationReducer,
  AppReducer,
  ContactsList
});
