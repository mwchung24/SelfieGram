import LoginForm from './login_form';
import { connect } from 'react-redux';
import { login, receiveCurrentUser } from '../../actions/session_actions';

const mapStateToProps = (state) => {
  return {
    loggedIn: !!state.session.currentUser,
    errors: state.session.errors,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {

  return {
    login: (user) => {
      return dispatch(login(user));
    },
    receiveCurrentUser: (user) => {
      return dispatch(receiveCurrentUser(user));
    }
  };
};

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
