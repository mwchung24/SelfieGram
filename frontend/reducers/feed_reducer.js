import { RECEIVE_FEED } from '../actions/photo_actions';
import { REMOVE_FEED } from '../actions/session_actions';
import { RECEIVE_FEED_LIKE, REMOVE_FEED_LIKE } from '../actions/like_actions';
import merge from 'lodash/merge';

const FeedReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = state;
  switch(action.type) {
    case RECEIVE_FEED:
      return action.photos;
    case REMOVE_FEED:
      return {};
    default:
      return state;
  }
};

export default FeedReducer;
