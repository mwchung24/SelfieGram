export const fetchUsers = users => {
  return $.ajax({
    method: 'GET',
    url: 'api/users',
    data: { users }
  });
};
