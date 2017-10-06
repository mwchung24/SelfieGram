import React from 'react';
import { Link } from 'react-router-dom';
import LikeContainer from '../like/like_container';
import CommentContainer from '../comment/comment_container';

class ModalBottom extends React.Component {
  constructor(props) {
    super(props);

    this.likeOrLikes = this.likeOrLikes.bind(this);
  }

  likeOrLikes () {
    if(this.props.photo) {
      if (this.props.photo.like_count === 1) {
        return "like";
      } else {
        return "likes";
      }
    }
  }

  month() {
    const MONTH = {
      1: "JANUARY",
      2: "FEBRUARY",
      3: "MARCH",
      4: "APRIL",
      5: "MAY",
      6: "JUNE",
      7: "JULY",
      8: "AUGUST",
      9: "SEPTEMBER",
      10: "OCTOBER",
      11: "NOVEMBER",
      12: "DECEMBER"
    };

    return MONTH[this.props.photo.createdAtMonth];
  }

  render () {
    return (
      <div className="bottom-pic">
        <section className="like-comment">
          <LikeContainer />
          <button className="comment-button" onClick={() => {document.getElementById("comment-redirect").focus();}}>
            <i className="fa fa-comment-o" aria-hidden="true"></i>
          </button>
        </section>
        <span className="num-of-like-on-photo">
          {this.props.photo.like_count} {this.likeOrLikes()}
        </span>
        <div className="uploadedAt">
          <span className="month">
            {this.month()}
          </span>
          <span className="day">
            {this.props.photo.createdAtDay},
          </span>
          <span className="year">
            {this.props.photo.createdAtYear}
          </span>
        </div>
        <section className="photo-comment-form">
          <CommentContainer photoId={this.props.photo.id} />
        </section>
      </div>
    );
  }
}

export default ModalBottom;
