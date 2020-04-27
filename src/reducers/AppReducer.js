import {
  CHANGE_EMAIL,
  ADD_CONTACT_ERROR
} from '../actions/types';

const INITIAL_STATES = {
  email: '',
  contact_error: ''
};

export default (state = INITIAL_STATES, action) => {
  switch (action.type) {
    case CHANGE_EMAIL:
      return { ...state, email: action.payload };
    case ADD_CONTACT_ERROR:
      return { ...state, contact_error: action.payload };
    default:
      return state;
  }
};
