import * as APIUtil from '../util/like_api_util';

export const RECEIVE_LIKE = 'RECEIVE_LIKE';
export const REMOVE_LIKE = 'REMOVE_LIKE';

export const receiveLike = like => ({
  type: RECEIVE_LIKE,
  like: like
});

export const removeLike = like => ({
  type: REMOVE_LIKE,
  like: like
});

export const addLike = photo_id => dispatch => {
  return APIUtil.addLike(photo_id).then(like => (
    dispatch(receiveLike(like))
  ));
};

export const deleteLike = photo_id => dispatch => {
  return APIUtil.deleteLike(photo_id).then(like => (
    dispatch(removeLike(like))
  ));
};
