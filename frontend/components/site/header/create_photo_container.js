import { connect } from 'react-redux';
import { uploadPhoto } from '../../../actions/photo_actions';
import CreatePhoto from './create_photo';
import { closeModal } from '../../../actions/modal_actions';
import { fetchUser } from '../../../actions/user_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  return ({
    username: state.session.currentUser.username,
  });
};

const mapDispatchToProps = (dispatch) => {
  return {
    uploadPhoto: (photo) => dispatch(uploadPhoto(photo)),
    closeModal: () => dispatch(closeModal()),
    fetchUser: (user) => dispatch(fetchUser(user)),
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(CreatePhoto));
