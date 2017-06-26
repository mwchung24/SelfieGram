export const fetchPhoto = (id) => {
  ////debugger
  return $.ajax({
    method: 'GET',
    url: `api/photos/${id}`
  });
};

export const uploadPhoto = (formData) => {
  return $.ajax({
    method: 'POST',
    url: 'api/photos',
    contentType: false,
    processData: false,
    data: formData,
  });
};

export const deletePhoto = (photo) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/photos/${photo.id}`
  });
};
