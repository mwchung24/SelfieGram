import { connect } from 'react-redux';
import { fetchFeedPhotos } from '../../../actions/photo_actions';
import Feed from './feed';
import { fetchUser } from '../../../actions/user_actions';
import { addLike, deleteLike } from '../../../actions/like_actions';

const mapStateToProps = (state, ownProps) => {
  return ({
    feed: state.feed,
  });
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchFeedPhotos: () => dispatch(fetchFeedPhotos()),
    fetchUser: (user) => dispatch(fetchUser(user)),
    addLike: (like) => dispatch(addLike(like)),
    deleteLike: (like) => dispatch(deleteLike(like)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Feed);
