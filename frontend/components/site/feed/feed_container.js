import { connect } from 'react-redux';
import { fetchFeedPhotos } from '../../../actions/photo_actions';
import Feed from './feed';
import { fetchUser } from '../../../actions/user_actions';

const mapStateToProps = (state, ownProps) => {
  return ({
    feed: state.feed,
  });
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchFeedPhotos: () => dispatch(fetchFeedPhotos()),
    fetchUser: (user) => dispatch(fetchUser(user)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Feed);
