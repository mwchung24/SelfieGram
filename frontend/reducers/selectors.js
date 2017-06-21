import values from 'lodash/values';
import orderBy from 'lodash/orderBy';

export const userArray = (users) => {
  if (users) {
    return orderBy(values(users), ['username'], ['asc']);
  } else {
    return [];
  }
};
