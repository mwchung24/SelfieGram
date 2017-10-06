import React from 'react';
import { Link } from 'react-router-dom';
import CommentFeedContainer from '../comment/comment_feed_container';
import PhotoComments from '../comment/photo_comments';

class FeedIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      liking: false,
    };

    this.followButton = this.followButton.bind(this);
    this.photoIsLiked = this.photoIsLiked.bind(this);
    this.likeOrLikes = this.likeOrLikes.bind(this);
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

  photoIsLiked(photo) {
    if (photo.liked) {
      return this.props.deleteFeedLike(photo.like_id)
      .then(() => setTimeout( () => this.setState({liking: false}), 1000));
    } else {
      return this.props.addFeedLike(photo.id)
      .then(() => setTimeout( () => this.setState({liking: false}), 1000));
    }
  }

  likeOrLikes(photo) {
    if(photo) {
      return photo.like_count === 1 ? "like" : "likes";
    }
  }

  render () {
    const photo = this.props.photo;

    const likeButton = () => {
      return this.followButton(photo);
    };

    const photoLiked = () => {
      return this.photoIsLiked(photo);
    };

    const likeOrLikes = () => {
      return this.likeOrLikes(photo);
    };

    const heartClass = this.state.liking ? "fa fa-heart feedLike liking" : "fa fa-heart feedLike";
    return (
      <li className="photo-wrap" key={photo.id}>
        <div className="photoFeedImage">
          <div className="photoFeedHeader">
            <Link to={`/users/${photo.username}`}><img className="user-profile-pic photoFeedProfilePic" src={photo.profile_pic}/></Link>
            <Link to={`/users/${photo.username}`} className="photoFeedUsername">{photo.username}</Link>
          </div>
          <div className="feedHeart"><i className={heartClass} aria-hidden="true"></i></div>
          <img className="photo-on-feed" src={photo.images_url} onDoubleClick={ () => {this.setState({liking: true}); photoLiked();}}/>
          <div className="bottom bottom-feed">
            <section className="like-comment">
              {likeButton()}
              <button className="comment-button" onClick={() => {document.getElementById(`${photo.id}`).focus();}}>
                <i className="fa fa-comment-o" aria-hidden="true"></i>
              </button>
            </section>
            <div className="num-of-like-on-photo like-on-feed">
              {photo.like_count} {likeOrLikes()}
            </div>
            <div>
              <div className="caption">
                <p>
                  <Link className="username-link-caption username-feed"
                    to={`/users/${photo.username}`}>{photo.username}
                  </Link>
                  <span className="photo-caption">
                    {photo.caption}
                  </span>
                </p>
              </div>
              <div className="comments-wrapper">
                <p>
                  <span className="comments">
                    <PhotoComments
                      photo={photo}
                      deleteFeedComment={this.props.deleteFeedComment}
                      username={this.props.username}
                    />
                  </span>
                </p>
              </div>
            </div>
            <div className="uploadedAt">
              <span className="day days-ago">
                {photo.daysAgo} ago
              </span>
            </div>
            <section className="photo-comment-form">
              <CommentFeedContainer photoId={photo.id} />
            </section>
          </div>
        </div>
      </li>
    );
  }

}

export default FeedIndexItem;
