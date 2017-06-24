import PhotoDetail from './photo_detail';
import { connect } from 'react-redux';
import { fetchPhoto } from '../../../actions/photo_actions';

const mapStateToProps = (state) => {

  return {
    state,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPhoto: (photo) => dispatch(fetchPhoto(photo)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoDetail);
