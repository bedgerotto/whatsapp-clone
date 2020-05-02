import {
  CHANGE_CONTACT_EMAIL,
  ADD_CONTACT_ERROR,
  ADD_CONTACT_SUCCESS
} from '../actions/types';

const INITIAL_STATES = {
  contactEmail: '',
  contactError: '',
  addContactSuccess: false
};

export default (state = INITIAL_STATES, action) => {
  switch (action.type) {
    case CHANGE_CONTACT_EMAIL:
      return { ...state, contactEmail: action.payload };
    case ADD_CONTACT_ERROR:
      return { ...state, contactError: action.payload };
    case ADD_CONTACT_SUCCESS:
      return { ...state, addContactSuccess: action.payload, contactEmail: '' };
    default:
      return state;
  }
};
