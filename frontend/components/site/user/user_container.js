import User from './user';
import { connect } from 'react-redux';
import { fetchUser } from '../../../actions/user_actions';
import { logout } from '../../../actions/session_actions';
import { selectAllImages } from '../../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  debugger
  return {
    currentUser: state.session.currentUser,
    user: state.user,
    userId: ownProps.match.params.userId,
    images: selectAllImages(state.user.images),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    logout: () => dispatch(logout()),
  };
};

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(User);
