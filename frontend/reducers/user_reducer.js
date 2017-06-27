import { RECEIVE_USER } from '../actions/user_actions';
import merge from 'lodash/merge';
import { RECEIVE_FOLLOW, REMOVE_FOLLOW } from '../actions/follow_actions';

const defaultState = Object.freeze({
  username: '',
  name: '',
  bio: '',
  profile_pic: '',
});

const UserReducer = (state = defaultState, action) => {
  // debugger
  const copyState = Object.assign({}, state);
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_USER:
      return action.user;
    case RECEIVE_FOLLOW:
      return merge({}, state, {followees: action.follow});
    case REMOVE_FOLLOW:
      delete copyState.followers[action.follow.follower_id];
      return copyState;
    default:
      return state;
  }
};

export default UserReducer;
