import EditUser from './edit_user';
import { connect } from 'react-redux';
import { updateUser } from '../../../actions/user_actions';

const mapStateToProps = (state) => {

};

const mapDispatchToProps = dispatch => {
  return {
    updateUser: (user) => dispatch(updateUser(user)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditUser);
