import { RECEIVE_PHOTO } from '../actions/photo_actions';
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
  //debugger
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_PHOTO:
      return action.photo;
    default:
      return state;
  }
};

export default PhotoReducer;
