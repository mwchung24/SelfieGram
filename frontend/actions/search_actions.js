import * as APIUtil from '../util/search_api_util';

export const RECEIVE_USERS = 'RECEIVE_USERS';
export const REMOVE_USERS = 'REMOVE_USERS';

export const receiveUsers = users => ({
  type: RECEIVE_USERS,
  users: users
});

export const removeUsers = () => ({
  type: REMOVE_USERS,
});

export const fetchUsers = users => dispatch => {
  return APIUtil.fetchUsers(users).then(users => (
    dispatch(receiveUsers(users))
  ));
};

export const clearUsers = () => dispatch => {
  dispatch(removeUsers());
};
