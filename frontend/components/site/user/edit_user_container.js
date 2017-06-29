import EditUser from './edit_user';
import { connect } from 'react-redux';
import { updateUser, fetchUser } from '../../../actions/user_actions';

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateUser: (user) => dispatch(updateUser(user)),
    fetchUser: (userId) => dispatch(fetchUser(userId)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditUser);
