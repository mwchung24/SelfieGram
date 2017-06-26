import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS } from '../actions/session_actions';
import merge from 'lodash/merge';

const defaultState = Object.freeze({
  currentUser: null,
  errors: []
});

const SessionReducer = (state = defaultState, action) => {
  // ////debugger
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_CURRENT_USER:
      return { currentUser: action.user, errors: [] };
    case RECEIVE_ERRORS:
      return merge({}, defaultState, {errors: action.errors});
    default:
      return state;
  }
};

export default SessionReducer;
