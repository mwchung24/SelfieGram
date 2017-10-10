import React from 'react';
import { Link } from 'react-router-dom';
import FeedPhotoHeader from './feed_header';
import FeedPhotoBottom from './feed_bottom';

class FeedIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      liking: false,
    };

    this.photoIsLiked = this.photoIsLiked.bind(this);
  }

  photoIsLiked(photo) {
    if (photo.liked) {
      return this.props.deleteFeedLike(photo.like_id)
      .then(() => setTimeout( () => this.setState({liking: false}), 1000));
    } else {
      return this.props.addFeedLike(photo.id)
      .then(() => setTimeout( () => this.setState({liking: false}), 1000));
    }
  }

  render () {
    const photo = this.props.photo;

    const photoLiked = () => {
      return this.photoIsLiked(photo);
    };

    const heartClass = this.state.liking ? "fa fa-heart feedLike liking" : "fa fa-heart feedLike";
    return (
      <li className="photo-wrap" key={photo.id}>
        <div className="photoFeedImage">
          <FeedPhotoHeader
            photo={photo}
          />
          <div className="feedHeart"><i className={heartClass} aria-hidden="true"></i></div>
          <img className="photo-on-feed" src={photo.images_url} onDoubleClick={ () => {this.setState({liking: true}); photoLiked();}}/>
          <FeedPhotoBottom
            photo={photo}
            deleteFeedLike={this.props.deleteFeedLike}
            addFeedLike={this.props.addFeedLike}
            deleteFeedComment={this.props.deleteFeedComment}
            currentUsername={this.props.currentUsername}
          />
        </div>
      </li>
    );
  }

}

export default FeedIndexItem;
