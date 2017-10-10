import React from 'react';
import { Link } from 'react-router-dom';
import CommentFeedContainer from '../comment/comment_feed_container';
import PhotoComments from '../comment/photo_comments';
import FeedCaption from './feed_caption';
import FeedLikeCommentButtons from './feed_like_comment_buttons';

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
        <FeedLikeCommentButtons
          photo={photo}
          deleteFeedLike={this.props.deleteFeedLike}
          addFeedLike={this.props.addFeedLike}
        />
        <div className="num-of-like-on-photo like-on-feed">
          {photo.like_count} {likeOrLikes()}
        </div>
        <div>
          <FeedCaption
            photo={photo}
          />
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
