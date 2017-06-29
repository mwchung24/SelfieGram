import { connect } from 'react-redux';
import { fetchFeedPhotos } from '../../../actions/photo_actions';

import { addComment, deleteComment } from '../../../actions/comment_actions';
import CommentFeed from './comment_feed';

const mapDispatchToProps = (dispatch) => {
  return {
    addComment: (comment) => dispatch(addComment(comment)),
    deleteComment: (comment_id) => dispatch(deleteComment(comment)),
    fetchFeedPhotos: () => dispatch(fetchFeedPhotos()),
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CommentFeed);
