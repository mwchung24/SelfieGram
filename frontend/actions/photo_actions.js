import * as APIUtil from '../util/photo_api_util';

export const RECEIVE_PHOTO = 'RECEIVE_PHOTO';
export const CREATE_PHOTO = 'CREATE_PHOTO';

export const receivePhoto = photo => ({
  type: RECEIVE_PHOTO,
  photo: photo
});

export const fetchPhoto = id => dispatch => {
  ////debugger
  return APIUtil.fetchPhoto(id).then(photo => (
    dispatch(receivePhoto(photo))
  ));
};

export const uploadPhoto = photo => dispatch => {
  return APIUtil.uploadPhoto(photo).then(photo => (
    dispatch(receivePhoto(photo))
  ));
};
