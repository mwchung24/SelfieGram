import { RECEIVE_FEED } from '../actions/photo_actions';
import { REMOVE_FEED } from '../actions/session_actions';
import { RECEIVE_FEED_LIKE, REMOVE_FEED_LIKE } from '../actions/like_actions';
import { RECEIVE_FEED_COMMENT, REMOVE_FEED_COMMENT } from '../actions/comment_actions';
import merge from 'lodash/merge';

const FeedReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state);
  switch(action.type) {
    case RECEIVE_FEED:
      return action.photos;
    case REMOVE_FEED:
      return {};
    case RECEIVE_FEED_LIKE:
      newState[action.like.photo_id].like_count += 1;
      newState[action.like.photo_id].like_id = action.like.id;
      newState[action.like.photo_id].liked = true;
      return newState;
    case REMOVE_FEED_LIKE:
      newState[action.like.photo_id].like_count -= 1;
      newState[action.like.photo_id].like_id = null;
      newState[action.like.photo_id].liked = false;
      return newState;
    case RECEIVE_FEED_COMMENT:
      newState[action.comment.photo_id].comment_id = action.comment.id;
      return merge({}, newState, { [action.comment.photo_id]: { comments: {[action.comment.id]: action.comment}}});
    case REMOVE_FEED_COMMENT:
      newState[action.comment.photo_id].comment_id = null;
      delete newState[action.comment.photo_id].comments[action.comment.id];
      return newState;
    default:
      return state;
  }
};

export default FeedReducer;
