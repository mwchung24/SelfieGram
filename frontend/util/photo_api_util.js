export const fetchPhoto = (id) => {
  //debugger
  return $.ajax({
    method:'GET',
    url: `api/photos/${id}`
  });
};
