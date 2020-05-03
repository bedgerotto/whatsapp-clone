import { FETCH_CHATS } from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_CHATS:
      return action.payload;
    default:
      return state;
  }
};