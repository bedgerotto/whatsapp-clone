import { combineReducers } from 'redux';
import AuthenticationReducer from './AuthenticationReducer';
import AppReducer from './AppReducer';
import ContactsListReducer from './ContactsListReducer';
import MessagesListReducer from './MessagesListReducer';
import ChatsListReducer from './ChatsListReducer';

export default combineReducers({
  AuthenticationReducer,
  AppReducer,
  ContactsListReducer,
  MessagesListReducer,
  ChatsListReducer
});
