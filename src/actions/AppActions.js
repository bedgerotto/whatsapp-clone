import firebase from 'firebase';
import b64 from 'base-64';

import {
  CHANGE_EMAIL,
  ADD_CONTACT,
  ADD_CONTACT_ERROR
} from './types';

export const changeEmail = text => (
  {
    type: CHANGE_EMAIL,
    payload: text
  }
);

export const addContact = email => {
  return (dispatch) => {
    const email64 = b64.encode(email);
    firebase.database().ref(`contacts/${email64}`).once('value')
      .then(snapshot => {
        if (snapshot.val()) {
          console.log(snapshot.val());
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
