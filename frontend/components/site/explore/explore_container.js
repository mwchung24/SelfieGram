import Explore from './explore';
import { connect } from 'react-redux';
import { fetchUsers } from '../../../actions/user_actions';
import { addFollow, deleteFollow, deleteExploreFollow } from '../../../actions/follow_actions';


const mapStateToProps = (state) => {
  return {
    users: state.users,
    currentUser: state.session.currentUser.username,
    currentUserId: state.session.currentUser.id,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: (users) => dispatch(fetchUsers(users)),
    addFollow: (follow) => dispatch(addFollow(follow)),
    deleteFollow: (follow) => dispatch(deleteFollow(follow)),
    deleteExploreFollow: (follow) => dispatch(deleteExploreFollow(follow)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Explore);
