export const addComment = (comment) => {
  return $.ajax({
    method: 'POST',
    url: 'api/comments',
    data: {comment}
  });
};

export const deleteComment = (comment_id) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/comments/${comment_id}`
  });
};
