import { RECEIVE_ALL_USERS } from '../actions/user_actions';
import { REMOVE_EXPLORE_FOLLOW } from '../actions/follow_actions';

const UsersReducer = (state = [], action) => {
  const copyState = Object.assign({}, state);
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_USERS:
      return action.users;
    case REMOVE_EXPLORE_FOLLOW:
      for (let i = 0; i < copyState.length; i++) {
        if (copyState[i].id === action.follow.followee_id) {
          delete copyState.followers[action.follow.follower_id];
          return copyState[i];
        }
      }
    default:
      return state;
  }
};

export default UsersReducer;
