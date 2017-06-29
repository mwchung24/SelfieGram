export const fetchUser = (user) => {
  return $.ajax({
    method: 'GET',
    url: `api/users/${user}`
  });
};

export const updateUser = (user) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/users/${user.id}`,
    data: {user: user}
  });
};
