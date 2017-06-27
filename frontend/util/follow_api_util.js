export const addFollow = (id) => {
  return $.ajax({
    method: 'POST',
    url: 'api/follows',
    data: {id}
  });
};

export const deleteFollow = (follow) => {
  ////debugger
  return $.ajax({
    method: 'DELETE',
    url: `api/follows/${follow}`
  });
};
