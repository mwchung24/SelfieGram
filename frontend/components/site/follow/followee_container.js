import Followee from './followee';
import { connect } from 'react-redux';
import { closeModal } from '../../../actions/modal_actions';
import { addFollow, deleteFollow } from '../../../actions/follow_actions';
import { fetchUser } from '../../../actions/user_actions';

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()),
    addFollow: (follow) => dispatch(addFollow(follow)),
    deleteFollow: (follow) => dispatch(deleteFollow(follow)),
    fetchUser: (userId) => dispatch(fetchUser(userId)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Followee);
