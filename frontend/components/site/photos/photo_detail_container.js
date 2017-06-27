import PhotoDetail from './photo_detail';
import { connect } from 'react-redux';
import { fetchPhoto, deletePhoto } from '../../../actions/photo_actions';
import { closeModal } from '../../../actions/modal_actions';
import { fetchUser } from '../../../actions/user_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    photo: state.photo,
    currentUserId: state.session.currentUser.id,
    userId: state.user.id,
    username: state.user.username,
    photo_url: state.user.photo_url,
    ownProps: ownProps,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPhoto: (photo) => dispatch(fetchPhoto(photo)),
    closeModal: () => dispatch(closeModal()),
    deletePhoto: (photo) => dispatch(deletePhoto(photo)),
    fetchUser: (user) => dispatch(fetchUser(user)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoDetail);
