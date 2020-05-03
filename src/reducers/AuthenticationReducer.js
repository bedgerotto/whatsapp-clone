import {
  CHANGE_EMAIL,
  CHANGE_NAME,
  CHANGE_PASSWORD,
  HANDLE_SECURE_PASSWORD,
  SINGIN_ERROR,
  SINGIN_SUCCESS,
  LOGIN_SUCCESSFUL,
  LOGIN_FAILED,
  PROCESSING_LOGIN,
  PROCESSING_SIGNIN
} from '../actions/types';

const INITIAL_STATES = {
  name: '',
  email: 'bedgerotto@gmail.com',
  password: '123456',
  securePassword: true,
  errorMessage: '',
  loginErrorMessage: '',
  processing_login: false
};

export default (state = INITIAL_STATES, action) => {
  switch (action.type) {
    case CHANGE_EMAIL:
      return { ...state, email: action.payload };
    case CHANGE_NAME:
      return { ...state, name: action.payload };
    case CHANGE_PASSWORD:
      return { ...state, password: action.payload };
    case HANDLE_SECURE_PASSWORD:
      return { ...state, securePassword: action.payload };
    case SINGIN_ERROR:
      return { ...state, errorMessage: action.payload, processing_signin: false };
    case SINGIN_SUCCESS:
      return { ...state, name: '', password: '', errorMessage: '', processing_signin: false };
    case LOGIN_SUCCESSFUL:
      return { ...state, processing_login: false };
    case LOGIN_FAILED:
      return { ...state, loginErrorMessage: action.payload, processing_login: false };
    case PROCESSING_LOGIN:
      return { ...state, processing_login: true };
    case PROCESSING_SIGNIN:
      return { ...state, processing_signin: true };
    default:
      return state;
  }
};
