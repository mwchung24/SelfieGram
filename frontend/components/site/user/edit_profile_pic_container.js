import EditProfilePic from './edit_profile_pic';
import { connect } from 'react-redux';
import { updateUserPic, fetchUser } from '../../../actions/user_actions';
import { closeModal } from '../../../actions/modal_actions';

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateUserPic: (formData) => dispatch(updateUserPic(formData)),
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditProfilePic);
