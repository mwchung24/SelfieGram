export const addLike = (photo_id) => {
  return $.ajax({
    method: 'POST',
    url: 'api/likes',
    data: {like: {photo_id: photo_id}}
  });
};


export const deleteLike = (like_id) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/likes/${like_id}`,
  });
};
