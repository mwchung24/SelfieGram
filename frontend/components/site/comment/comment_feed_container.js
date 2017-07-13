import { connect } from 'react-redux';
import { fetchFeedPhotos } from '../../../actions/photo_actions';

import { addFeedComment, deleteFeedComment } from '../../../actions/comment_actions';
import CommentFeed from './comment_feed';

const mapDispatchToProps = (dispatch) => {
  return {
    addFeedComment: (comment) => dispatch(addFeedComment(comment)),
    deleteFeedComment: (comment_id) => dispatch(deleteFeedComment(comment)),
    fetchFeedPhotos: () => dispatch(fetchFeedPhotos()),
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CommentFeed);
