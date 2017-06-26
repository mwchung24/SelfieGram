import { RECEIVE_PHOTO, REMOVE_PHOTO } from '../actions/photo_actions';
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
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_PHOTO:
      return action.photo;
    case REMOVE_PHOTO:
      return defaultState;
    default:
      return state;
  }
};

export default PhotoReducer;
