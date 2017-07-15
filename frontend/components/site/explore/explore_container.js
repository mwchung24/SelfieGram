import Explore from './explore';
import { connect } from 'react-redux';
import { fetchUsers } from '../../../actions/user_actions';

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: (users) => dispatch(fetchUsers(users)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Explore);
