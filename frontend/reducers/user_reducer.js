import { RECEIVE_USER } from '../actions/user_actions';
import merge from 'lodash/merge';

const defaultState = Object.freeze({
  username: '',
  name: '',
  bio: '',
  profile_pic: '',
});

const UserReducer = (state = defaultState, action) => {
  ////debugger
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_USER:
      return action.user;
    default:
      return state;
  }
};

export default UserReducer;
