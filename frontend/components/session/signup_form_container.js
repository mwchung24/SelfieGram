import SignupForm from './signup_form';
import { connect } from 'react-redux';
import { signup, login } from '../../actions/session_actions';

const mapStateToProps = (state) => {
  return {
    loggedIn: !!state.session.currentUser,
    errors: state.session.errors,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    signup: (user) => {
      return dispatch(signup(user));
    },
    login: (user) => {
      return dispatch(login(user));
    }
  };
};

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(SignupForm);
