import React from 'react';
import { Link } from 'react-router-dom';
import { selectAllComments } from '../../../reducers/selectors';
import DeleteCommentIcon from '../comment/delete_comment_icon';

class PhotoComments extends React.Component {
  constructor(props) {
    super(props);

  }

  render () {
    const photo = this.props.photo;
    const comments = selectAllComments(photo.comments);
    let allPhotoComments;
    if (comments) {
      allPhotoComments = comments.map( (comment) => {
        return (
          <DeleteCommentIcon
            key={comment.id}
            currentUsername={this.props.currentUsername}
            deleteComment={this.props.deleteFeedComment}
            comment={comment}
          />
        );
      });
    }
    return (
      <ul>
        {allPhotoComments}
      </ul>
    );
  }

}

export default PhotoComments;
