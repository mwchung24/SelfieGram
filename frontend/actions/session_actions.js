import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const REMOVE_ERRORS = "REMOVE_ERRORS";
export const REMOVE_FEED = "REMOVE_FEED";

export const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user: user
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors: errors
});

export const removeFeed = () => ({
  type: REMOVE_FEED,
});

export const signup = user => dispatch => {

  return APIUtil.signup(user).then(user => (
    dispatch(receiveCurrentUser(user))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ));
};

export const login = user => dispatch => {
  return APIUtil.login(user).then(user => (
    dispatch(receiveCurrentUser(user))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ));
};

export const logout = () => dispatch => (
  APIUtil.logout().then(user => (
    dispatch(receiveCurrentUser(null))))
);

export const updateCurrentUser = user => dispatch => {
  return APIUtil.updateCurrentUser(user).then(user => (
    dispatch(receiveCurrentUser(user))
  ));
};
