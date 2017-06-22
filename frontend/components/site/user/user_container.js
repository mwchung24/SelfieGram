import User from './user';
import { connect } from 'react-redux';
import { fetchUser } from '../../../actions/user_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    user: state.user,
    userId: ownProps.match.params.userId,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: (userId) => dispatch(fetchUser(userId)),
  };
};

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(User);