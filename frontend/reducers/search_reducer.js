import { RECEIVE_USERS, REMOVE_USERS } from '../actions/search_actions';
import merge from 'lodash/merge';

const defaultState = Object.freeze([]);

const SearchReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_USERS:
      return action.users;
    case REMOVE_USERS:
      return defaultState;
    default:
      return state;
  }
};

export default SearchReducer;
