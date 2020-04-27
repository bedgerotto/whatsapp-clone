import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import b64 from 'base-64';

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
} from './types';

export const changeEmail = state => (
  {
    type: CHANGE_EMAIL,
    payload: state
  }
);

export const changePassword = state => (
  {
    type: CHANGE_PASSWORD,
    payload: state
  }
);

export const changeName = state => (
  {
    type: CHANGE_NAME,
    payload: state
  }
);

export const handleSecurePassword = state => (
  {
    type: HANDLE_SECURE_PASSWORD,
    payload: state
  }
);

export const storeUser = ({ name, email, password }) => (
  (dispatch) => {
    dispatch({ type: PROCESSING_SIGNIN });
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(user => {
        const b64Email = b64.encode(email);
        firebase.database().ref(`contacts/${b64Email}`).push({ name })
          .then(() => userStored(user, dispatch))
          .catch(error => console.log(error));
      })
      .catch(error => userError(error, dispatch));
  }
);

export const authUser = ({ email, password }) => (
  (dispatch) => {
    dispatch({ type: PROCESSING_LOGIN });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => {
        dispatch({ type: LOGIN_SUCCESSFUL });

        Actions.main();
      })
      .catch((error) => (
        dispatch({ type: LOGIN_FAILED, payload: error.message })
      ));
  }
);

const userError = (error, dispatch) => {
  dispatch({ type: SINGIN_ERROR, payload: error.message });
};

const userStored = (user, dispatch) => {
  dispatch({ type: SINGIN_SUCCESS });

  Actions.welcome();
};
