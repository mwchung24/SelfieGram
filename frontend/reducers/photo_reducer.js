import { RECEIVE_PHOTO, REMOVE_PHOTO } from '../actions/photo_actions';
import { RECEIVE_LIKE, REMOVE_LIKE } from '../actions/like_actions';
import merge from 'lodash/merge';

const defaultState = Object.freeze({
  username: '',
  user_profile: '',
  images_url: '',
  caption: '',
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
      return merge({}, state, {likes: action.like});
    case REMOVE_LIKE:
      delete copyState.likes[action.like.photo_id];
      return copyState;
    default:
      return state;
  }
};

export default PhotoReducer;
