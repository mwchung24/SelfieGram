import Header from './header';
import { connect } from 'react-redux';
import { logout } from '../../../actions/session_actions';
import { openModal } from '../../../actions/modal_actions';

const mapStateToProps = (state) => {
  return {
    username: state.session.currentUser.username,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    openModal: (component) => dispatch(openModal(component)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
