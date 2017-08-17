import * as APIUtil from '../util/user_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';
export const REMOVE_USER = 'REMOVE_USER';

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user: user
});

export const receiveUsers = users => ({
  type: RECEIVE_ALL_USERS,
  users: users
});

export const removeUser = user => ({
  type: REMOVE_USER,
  user: user
});

export const fetchUser = user => dispatch => {
  return APIUtil.fetchUser(user).then(user => (
    dispatch(receiveUser(user))
  ));
};

export const fetchUsers = () => dispatch => {
  return APIUtil.fetchUsers().then(users => (
    dispatch(receiveUsers(users))
  ));
};

export const updateUser = user => dispatch => {

  return APIUtil.updateUser(user).then(user => (
    dispatch(receiveUser(user))
  ));
};

export const updateUserPic = formData => dispatch => {
  return APIUtil.updateUserPic(formData).then(user => (
    dispatch(receiveUser(user))
  ));
};

export const deleteUser = () => dispatch => {
  dispatch(removeUser());
};
