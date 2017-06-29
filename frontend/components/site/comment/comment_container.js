import { connect } from 'react-redux';
import { fetchPhoto } from '../../../actions/photo_actions';

import { addComment, deleteComment } from '../../../actions/comment_actions';
import Comment from './comment';

const mapDispatchToProps = (dispatch) => {
  return {
    addComment: (comment) => dispatch(addComment(comment)),
    deleteComment: (comment_id) => dispatch(deleteComment(comment)),
    fetchPhoto: (photo_id) => dispatch(fetchPhoto(photo_id)),
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Comment);
