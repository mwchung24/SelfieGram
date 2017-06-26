import { connect } from 'react-redux';
import { uploadPhoto } from '../../../actions/photo_actions';
import CreatePhoto from './create_photo';
import { closeModal } from '../../../actions/modal_actions';
import { fetchUser } from '../../../actions/user_actions';

const mapStateToProps = (state) => {
  return ({
    state: state
  });
};

const mapDispatchToProps = (dispatch) => {
  return {
    uploadPhoto: (photo) => dispatch(uploadPhoto(photo)),
    closeModal: () => dispatch(closeModal()),
    fetchUser: (user) => dispatch(fetchUser(user)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreatePhoto);
