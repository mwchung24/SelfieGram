import * as APIUtil from '../util/like_api_util';

export const RECEIVE_LIKE = 'RECEIVE_LIKE';
export const REMOVE_LIKE = 'REMOVE_LIKE';
export const RECEIVE_FEED_LIKE = 'RECEIVE_FEED_LIKE';
export const REMOVE_FEED_LIKE = 'REMOVE_FEED_LIKE';

export const receiveLike = like => ({
  type: RECEIVE_LIKE,
  like: like
});

export const removeLike = like => ({
  type: REMOVE_LIKE,
  like: like
});

export const receiveFeedLike = like => ({
  type: RECEIVE_FEED_LIKE,
  like: like
});

export const removeFeedLike = like => ({
  type: REMOVE_FEED_LIKE,
  like: like
});

export const addLike = photo_id => dispatch => {
  return APIUtil.addLike(photo_id).then(like => (
    dispatch(receiveLike(like))
  ));
};

export const deleteLike = like_id => dispatch => {
  return APIUtil.deleteLike(like_id).then(like => (
    dispatch(removeLike(like))
  ));
};

export const addFeedLike = photo_id => dispatch => {
  return APIUtil.addLike(photo_id).then(like => (
    dispatch(receiveFeedLike(like))
  ));
};

export const deleteFeedLike = like_id => dispatch => {
  return APIUtil.deleteLike(like_id).then(like => (
    dispatch(removeFeedLike(like))
  ));
};
