import React from 'react';
import { Link } from 'react-router-dom';
import { selectAllComments } from '../../../reducers/selectors';

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

        const deleteCommentIcon = () => {
          if (this.props.username === comment.username) {
            return (
              <button
                className="delete-comment">
                <i
                  onClick={() => this.props.deleteFeedComment(comment.id)}
                  className="fa fa-times"
                  aria-hidden="true">
                </i>
              </button>
            );
          } else {
            return (
              <div></div>
            );
          }
        };

        return (
          <li key={comment.id} className="comment-item">
            <div className="comment-username-and-comment">
              <Link className="username-link-caption username-feed"
                to={`/users/${comment.username}`}>{comment.username}
              </Link>
              {comment.body}
            </div>
            {deleteCommentIcon()}
          </li>
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
