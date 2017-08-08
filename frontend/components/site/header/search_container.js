import { connect } from 'react-redux';
import Search from './search';
import { userArray } from '../../../reducers/selectors';
import { fetchUsers, clearUsers } from '../../../actions/search_actions';

const mapStateToProps = state => {
  return {
    search: state.search,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: (users) => dispatch(fetchUsers(users)),
    clearUsers: () => dispatch(clearUsers()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
