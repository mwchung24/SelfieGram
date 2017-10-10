import React from 'react';
import { Link } from 'react-router-dom';
import CommentFeedContainer from '../comment/comment_feed_container';
import Like from '../like/like';
import PhotoComments from '../comment/photo_comments';

class FeedPhotoBottom extends React.Component {
  constructor(props) {
    super(props);

  this.likeOrLikes = this.likeOrLikes.bind(this);
  }

  likeOrLikes(photo) {
    if(photo) {
      return photo.like_count === 1 ? "like" : "likes";
    }
  }

  render () {
    let photo = this.props.photo;

    const likeOrLikes = () => {
      return this.likeOrLikes(photo);
    };

    return(
      <div className="bottom bottom-feed">
        <section className="like-comment">
          <Like
            photo={photo}
            deleteLike={this.props.deleteFeedLike}
            addLike={this.props.addFeedLike}
          />
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
            <div>
              <span className="comments">
                <PhotoComments
                  photo={photo}
                  deleteFeedComment={this.props.deleteFeedComment}
                  currentUsername={this.props.currentUsername}
                />
              </span>
            </div>
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
    );
  }
}

export default FeedPhotoBottom;
