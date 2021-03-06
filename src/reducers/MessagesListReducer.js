import { FETCH_MESSAGES } from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_MESSAGES:
      return action.payload;
    default:
      return state;
  }
};
