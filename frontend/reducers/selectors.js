import values from 'lodash/values';
import orderBy from 'lodash/orderBy';

export const userArray = (users) => {
  if (users) {
    return orderBy(values(users), ['username'], ['asc']);
  } else {
    return [];
  }
};

export const selectAllImages = (images) => {
  if (images) {
    return orderBy(values(images), ['createdAt'], ['desc']);
  } else {
    return [];
  }
};
