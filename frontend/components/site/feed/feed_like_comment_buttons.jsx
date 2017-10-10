import React from 'react';
import { Link } from 'react-router-dom';
import Like from '../like/like';

class FeedLikeCommentButtons extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    let photo = this.props.photo;
    return(
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
    );
  }
}

export default FeedLikeCommentButtons;
