import * as APIUtil from '../util/photo_api_util';

export const RECEIVE_PHOTO = 'RECEIVE_PHOTO';

export const receivePhoto = photo => ({
  type: RECEIVE_PHOTO,
  photo: photo
});

export const fetchPhoto = id => dispatch => {
  //debugger
  return APIUtil.fetchPhoto(id).then(photo => (
    dispatch(receivePhoto(photo))
  ));
};
