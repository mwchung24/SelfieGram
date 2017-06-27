import { RECEIVE_FEED } from '../actions/photo_actions';
import merge from 'lodash/merge';

const FeedReducer = (state = {}, action) => {

  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_FEED:
      return merge({}, state, action.photos);
    default:
      return state;
  }
};

export default FeedReducer;
