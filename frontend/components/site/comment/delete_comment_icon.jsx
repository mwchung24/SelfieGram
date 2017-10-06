import React from 'react';
import { Link } from 'react-router-dom';

class DeleteCommentIcon extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    let comment = this.props.comment;
    const deleteCommentIcon = () => {

      if (comment.username === comment.username) {
        return (
          <button
            className="delete-comment">
            <i
              onClick={() => this.props.deleteComment(comment.id)}
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
          <p className="comment-username">
            <Link
              className="username-link"
              to={`/users/${comment.username}`}
              onClick={ () => this.modalClose()}>
              {comment.username}
            </Link>
            <span className="comment-body">
              {comment.body}
            </span>
          </p>
        </div>
        {deleteCommentIcon()}
      </li>
    );
  }
}

export default DeleteCommentIcon;
