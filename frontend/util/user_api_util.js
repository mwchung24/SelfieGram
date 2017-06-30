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
    data: {user: user},
  });
};

export const updateUserPic = (formData, id) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/users/${id}`,
    contentType: false,
    processData: false,
    data: formData,
  });
};
