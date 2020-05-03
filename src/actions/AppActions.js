import firebase from 'firebase';
import b64 from 'base-64';
import _ from 'lodash';

import {
  CHANGE_CONTACT_EMAIL,
  ADD_CONTACT,
  ADD_CONTACT_ERROR,
  ADD_CONTACT_SUCCESS,
  USER_CONTACT_LIST,
  CHANGE_MESSAGE
} from './types';

export const changeEmail = text => (
  {
    type: CHANGE_CONTACT_EMAIL,
    payload: text
  }
);

export const addContact = email => {
  return (dispatch) => {
    const email64 = b64.encode(email);
    firebase.database().ref(`contacts/${email64}`).once('value')
      .then(snapshot => {
        if (snapshot.val()) {
          const { currentUser } = firebase.auth();
          const currentUserEmailB64 = b64.encode(currentUser.email);
          const currentContact  = _.first(_.values(snapshot.val()));
          firebase.database().ref(`user_contacts/${currentUserEmailB64}`).push({ email, name: currentContact.name })
            .then(() => (addContactSuccess(dispatch)))
            .catch(error => addContactError(error, dispatch));
        } else {
          dispatch({
            type: ADD_CONTACT_ERROR,
            payload: 'Contato não encontrado'
          });
        }
      });
    return {
      type: ADD_CONTACT,
      payload: email
    };
  };
};

export const resetAddContactStatus = () => (
  { type: ADD_CONTACT_SUCCESS, payload: false }
);

const addContactSuccess = (dispatch) => (
  dispatch({
    type: ADD_CONTACT_SUCCESS,
    payload: true
  })
);

const addContactError = (error, dispatch) => (
  dispatch({
    type: ADD_CONTACT_ERROR,
    payload: error.message
  })
);


export const fetchUserContacts = () => {
  const { currentUser } = firebase.auth();
  return dispatch => {
    const currentUserEncoded = b64.encode(currentUser.email);
    firebase.database().ref(`user_contacts/${currentUserEncoded}`)
      .on('value', (snapshot) => {
        dispatch({ type: USER_CONTACT_LIST, payload: snapshot.val() });
      });
  };
};

export const changeMessage = (message) => (
  {
    type: CHANGE_MESSAGE,
    payload: message
  }
);
