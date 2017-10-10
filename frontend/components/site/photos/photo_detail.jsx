import React from 'react';
import { Link } from 'react-router-dom';
import { selectAllComments } from '../../../reducers/selectors';
import PhotoInfo from './photo_info';
import DeleteCommentIcon from '../comment/delete_comment_icon';

class PhotoDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPhoto(this.props.id);
  }

  componentWillUnmount() {
    this.props.deletePhotoFromState();
  }

  render () {

    if (this.props.photo) {
      const comments = selectAllComments(this.props.photo.comments);
      let allPhotoComments;

      if (comments) {
        allPhotoComments = comments.map( (comment) => {
          return (
            <DeleteCommentIcon
              currentUsername={this.props.currentUsername}
              username={this.props.username}
              deleteComment={this.props.deleteComment}
              comment={comment}
              closeModal={this.props.closeModal}
            />
          );
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
