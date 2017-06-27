import * as APIUtil from '../util/follow_api_util';

export const RECEIVE_FOLLOW = 'RECEIVE_FOLLOW';
export const REMOVE_FOLLOW = 'REMOVE_FOLLOW';

export const receiveFollow = follow => ({
  type: RECEIVE_FOLLOW,
  follow: follow
});

export const removeFollow = follow => ({
  type: REMOVE_FOLLOW,
  follow: follow
});

export const addFollow = follow => dispatch => {
  return APIUtil.addFollow(follow).then(follow => (
    dispatch(receiveFollow(follow))
  ));
};

export const deleteFollow = follow => dispatch => {
  //debugger
  return APIUtil.deleteFollow(follow).then(follow => (
    dispatch(removeFollow(follow))
  ));
};
