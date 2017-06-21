import { connect } from 'react-redux';
import Search from './search';
import { userArray } from '../../../reducers/selectors';

const mapStateToProps = state => {
  return {
    users: userArray(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // fetchAllUsers: users => dispatch(fetchAllUsers(users)),
    // removeAllUsers: () => dispatch(removeAllUsers())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
