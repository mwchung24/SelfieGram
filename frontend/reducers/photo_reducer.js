import { RECEIVE_PHOTO, REMOVE_PHOTO } from '../actions/photo_actions';
import { RECEIVE_LIKE, REMOVE_LIKE } from '../actions/like_actions';
import { RECEIVE_COMMENT, REMOVE_COMMENT } from '../actions/comment_actions';
import merge from 'lodash/merge';

const defaultState = Object.freeze({
  username: '',
  user_profile: '',
  images_url: '',
  caption: '',
  likes: {},
  comments: {},
  createdAt: '',
  uploadedAt: '',
});

const PhotoReducer = (state = defaultState, action) => {

  const copyState = Object.assign({}, state);
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_PHOTO:
      return action.photo;
    case REMOVE_PHOTO:
      return defaultState;
    case RECEIVE_LIKE:
      copyState.like_count += 1;
      copyState.like_id = action.like.id;
      copyState.liked = true;
      return copyState;
    case REMOVE_LIKE:
      copyState.like_count -= 1;
      copyState.like_id = null;
      copyState.liked = false;
      return copyState;
    case RECEIVE_COMMENT:
      return merge({}, state, {comments: { [action.comment.id]: action.comment}});
    case REMOVE_COMMENT:
      delete copyState.comments[action.comment.id];
      return copyState;
    default:
      return state;
  }
};

export default PhotoReducer;
