import React from 'react';
import { Link } from 'react-router-dom';

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
  }

  followButton(photo) {
    if(photo.liked) {
      return (
        <button className="liked" onClick={ () => this.props.deleteFeedLike(photo.like_id)
          }>
          <i className="fa fa-heart" aria-hidden="true"></i>
        </button>
      );
    } else {
      return (
        <button className="like-button" onClick={ () => this.props.addFeedLike(photo.id)
          }>
          <i className="fa fa-heart-o" aria-hidden="true"></i>
        </button>
      );
    }
  }
}

export default LikeButton;
