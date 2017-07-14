import * as APIUtil from '../util/search_api_util';

export const RECEIVE_USERS = 'RECEIVE_USERS';

export const receiveUsers = users => ({
  type: RECEIVE_USERS,
  users: users
});

export const fetchUsers = users => dispatch => {
  return APIUtil.fetchUsers(users).then(users => (
    dispatch(receiveUsers(users))
  ));
};
