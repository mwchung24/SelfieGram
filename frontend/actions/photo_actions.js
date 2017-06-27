import * as APIUtil from '../util/photo_api_util';

export const RECEIVE_PHOTO = 'RECEIVE_PHOTO';
export const CREATE_PHOTO = 'CREATE_PHOTO';
export const REMOVE_PHOTO = 'REMOVE_PHOTO';
export const RECEIVE_FEED = 'RECEIVE_FEED';

export const receivePhoto = photo => ({
  type: RECEIVE_PHOTO,
  photo: photo
});

export const removePhoto = photo => ({
  type: REMOVE_PHOTO,
  photo: photo
});

export const receiveFeed = photos => ({
  type: RECEIVE_FEED,
  photos: photos
});

export const fetchPhoto = id => dispatch => {
  return APIUtil.fetchPhoto(id).then(photo => (
    dispatch(receivePhoto(photo))
  ));
};

export const uploadPhoto = photo => dispatch => {
  return APIUtil.uploadPhoto(photo).then(photo => (
    dispatch(receivePhoto(photo))
  ));
};

export const deletePhoto = photo => dispatch => {
  return APIUtil.deletePhoto(photo).then(photo => (
    dispatch(removePhoto(photo))
  ));
};

export const fetchFeedPhotos = () => dispatch => {

  return APIUtil.fetchFeedPhotos().then(photos => (
    dispatch(receiveFeed(photos))
  ));
};
