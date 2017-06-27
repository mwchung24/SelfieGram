import { connect } from 'react-redux';
import { fetchFeedPhotos } from '../../../actions/photo_actions';
import Feed from './feed';

const mapStateToProps = (state) => {
  return ({
    state: state
  });
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchFeedPhotos: (currentUser_id) => dispatch(fetchFeedPhotos(currentUser_id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Feed);
