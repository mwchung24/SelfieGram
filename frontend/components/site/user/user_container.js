import User from './user';
import { connect } from 'react-redux';
import { fetchUser } from '../../../actions/user_actions';
import { logout } from '../../../actions/session_actions';
import { selectAllImages } from '../../../reducers/selectors';
import { openModal } from '../../../actions/modal_actions';
import { addFollow, deleteFollow } from '../../../actions/follow_actions';

const mapStateToProps = (state, ownProps) => {

  return {
    currentUserId: state.session.currentUser.id,
    currentUsername: state.session.currentUser.username,
    user: state.user,
    userId: ownProps.match.params.userId,
    images: selectAllImages(state.user.images),
  };
};

const mapDispatchToProps = dispatch => {

  return {
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    logout: () => dispatch(logout()),
    openModal: (component) => dispatch(openModal(component)),
    addFollow: (follow) => dispatch(addFollow(follow)),
    deleteFollow: (follow) => dispatch(deleteFollow(follow)),
  };
};

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(User);
