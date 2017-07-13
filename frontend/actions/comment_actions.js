import * as APIUtil from '../util/comment_api_util';

export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const RECEIVE_FEED_COMMENT = 'RECEIVE_FEED_COMMENT';
export const REMOVE_FEED_COMMENT = 'REMOVE_FEED_COMMENT';

export const receiveComment = comment => ({
  type: RECEIVE_COMMENT,
  comment: comment
});

export const removeComment = comment => ({
  type: REMOVE_COMMENT,
  comment: comment
});

export const receiveFeedComment = comment => ({
  type: RECEIVE_FEED_COMMENT,
  comment: comment
});

export const removeFeedComment = comment => ({
  type: REMOVE_FEED_COMMENT,
  comment: comment
});

export const addComment = comment => dispatch => {
  return APIUtil.addComment(comment).then(comment => (
    dispatch(receiveComment(comment))
  ));
};

export const deleteComment = comment_id => dispatch => {
  return APIUtil.deleteComment(comment_id).then(comment => (
    dispatch(removeComment(comment))
  ));
};

export const addFeedComment = comment => dispatch => {
  return APIUtil.addComment(comment).then(comment=> (
    dispatch(receiveFeedComment(comment))
  ));
};

export const deleteFeedComment = comment_id => dispatch => {
  return APIUtil.deleteComment(comment_id).then(comment => (
    dispatch(removeFeedComment(comment))
  ));
};
