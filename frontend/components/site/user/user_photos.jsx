import React from 'react';
import { Link } from 'react-router-dom';
import PhotoDetailContainer from '../photos/photo_detail_container';

class UserPhotos extends React.Component {
  constructor(props) {
    super(props);

  }

  render () {
    let photo = this.props.photo;
    return (
      <li key={photo.id} className='userPhotoItem'>
        <div className="hover-images">
          <div className="likes-and-comments">
            <div className="likes-and-count">
              <div><i className="fa fa-heart hover-heart" aria-hidden="true"></i></div>
              <div className="hover-heart-count">{photo.like_count}</div>
            </div>
            <div className="comments-and-count">
              <div><i className="fa fa-comment hover-comment" aria-hidden="true"></i></div>
              <div className="hover-comment-count">{photo.comment_count}</div>
            </div>
          </div>
        </div>
        <img className='photoItem' src={photo.images_url} onClick={() => this.props.openModal(<PhotoDetailContainer id={photo.id} photos={this.props.photos}/>)} />
      </li>
    );
  }
}

export default UserPhotos;
