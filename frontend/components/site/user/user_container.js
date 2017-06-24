import User from './user';
import { connect } from 'react-redux';
import { fetchUser } from '../../../actions/user_actions';
import { logout } from '../../../actions/session_actions';
import { selectAllImages } from '../../../reducers/selectors';
import { openModal } from '../../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
  //debugger
  return {
    currentUser: state.session.currentUser,
    user: state.user,
    userId: ownProps.match.params.userId,
    images: selectAllImages(state.user.images),
  };
};

const mapDispatchToProps = dispatch => {
  // debugger
  return {
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    logout: () => dispatch(logout()),
    openModal: (component) => dispatch(openModal(component)),
  };
};

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(User);
