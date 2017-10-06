import React from 'react';
import { Link } from 'react-router-dom';
import { selectAllComments } from '../../../reducers/selectors';
import PhotoInfo from './photo_info';

class PhotoDetail extends React.Component {
  constructor(props) {
    super(props);

    this.deleteComment = this.deleteComment.bind(this);
  }

  componentDidMount() {
    this.props.fetchPhoto(this.props.id);
  }

  componentWillUnmount() {
    this.props.deletePhotoFromState();
  }

  deleteComment (comment) {
    const deleteCommentIcon = () => {

      if (this.props.currentUsername === comment.username) {
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

  render () {

    if (this.props.photo) {
      const comments = selectAllComments(this.props.photo.comments);
      let allPhotoComments;

      if (comments) {
        allPhotoComments = comments.map( (comment) => {
          return this.deleteComment(comment);
        });
      }

      return (
        <PhotoInfo
          allPhotoComments={allPhotoComments}
          deleteLike={this.props.deleteLike}
          addLike={this.props.addLike}
          closeModal={this.props.closeModal}
          photo={this.props.photo}
          username={this.props.username}
          photoURL={this.props.photo_url}
          deletePhoto={this.props.deletePhoto}
          fetchUser={this.props.fetchUser}
        />
      );
    }
  }
}

export default PhotoDetail;
