import { RECEIVE_USERS } from '../actions/search_actions';
import merge from 'lodash/merge';

const SearchReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_USERS:
      return action.users;
    default:
      return state;
  }
};

export default SearchReducer;
