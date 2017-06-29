import { connect } from 'react-redux';
import { fetchPhoto } from '../../../actions/photo_actions';

import { addLike, deleteLike } from '../../../actions/like_actions';
import Like from './like';

const mapStateToProps = (state, ownProps) => {
  return {
    photo: state.photo,
    likes: state.photo.likes,
    currentUserId: state.session.currentUser.id,
    userId: state.user.id,
    username: state.user.username,
    photo_url: state.user.photo_url,
    ownProps: ownProps,
    currentUsername: state.session.currentUser.username,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addLike: (photo_id) => dispatch(addLike(photo_id)),
    deleteLike: (like_id) => dispatch(deleteLike(like_id)),
    fetchPhoto: (photo_id) => dispatch(fetchPhoto(photo_id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Like);
