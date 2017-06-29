import React from 'react';
import { Link } from 'react-router-dom';
import CommentContainer from '../comment/comment_container';
import { selectAllComments } from '../../../reducers/selectors';

class PhotoDetail extends React.Component {
  constructor(props) {
    super(props);

    this.deleteIcon = this.deleteIcon.bind(this);
    this.likeButton = this.likeButton.bind(this);
    this.likeOrLikes = this.likeOrLikes.bind(this);
  }

  componentDidMount() {

    this.props.fetchPhoto(this.props.id);
  }

  delete() {
    this.props.deletePhoto(this.props.photo)
    .then(() => this.props.closeModal())
    .then(() => this.props.fetchUser(this.props.username));
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

  deleteIcon() {
    if (this.props.userId === this.props.currentUserId){
      return (
        <button className="delete-photo-icon" onClick={ () => this.delete()}>
          <i className="fa fa-trash-o" aria-hidden="true"></i>
        </button>
      );
    } else {
      return (<div></div>);
    }
  }

  likeButton () {
    if(this.props.photo.liked) {
      return (
        <button className="liked" onClick={ () => this.props.deleteLike(this.props.photo.like_id).then(() => this.props.fetchPhoto(this.props.id))}>
          <i className="fa fa-heart" aria-hidden="true"></i>
        </button>
      );
    } else {
      return (
        <button className="like-button" onClick={ () => this.props.addLike(this.props.photo.id).then(() => this.props.fetchPhoto(this.props.id))}>
          <i className="fa fa-heart-o" aria-hidden="true"></i>
        </button>
      );
    }
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



  render () {
    if (this.props.photo) {

      const comments = selectAllComments(this.props.photo.comments);
      let allPhotoComments;

      if (comments) {
        allPhotoComments = comments.map( (comment) => {
          return (
            <li key={comment.id}>
              {comment.body}
            </li>
          );
        });
      }

      return (
        <div className="wholeModal" onClick={(e) => e.stopPropagation()}>
          <div className="imageContainer">
            <img className="imageModal" src={this.props.photo.images_url} />
            <div className="rightModal">
              <div className="headerModal">
                <div className="user-profile-modal">
                  <Link to={`/users/${this.props.username}`} onClick={ () => this.props.closeModal()}><img className="user-profile-pic" src={this.props.photo_url}/></Link>
                </div>
                <div className="user-username">
                  <div><Link className="username-link" to={`/users/${this.props.username}`} onClick={ () => this.props.closeModal()}>{this.props.username}</Link></div>
                </div>
                <div className="delete-photo">
                  {this.deleteIcon()}
                </div>
              </div>
              <div className="bodyModal">
                <div>
                  <div className="caption">
                    <p>
                      <Link className="username-link-caption"
                        to={`/users/${this.props.username}`}
                        onClick={ () => this.props.closeModal()}>{this.props.username}
                      </Link>
                      <span className="photo-caption">
                        {this.props.photo.caption}
                      </span>
                    </p>
                  </div>
                  <div className="comments-wrapper">
                    <p>
                      <span className="comments">
                        <ul>
                          {allPhotoComments}
                        </ul>
                      </span>
                    </p>
                  </div>
                </div>
                <div className="bottom-pic">
                  <section className="like-comment">
                    {this.likeButton()}
                    <button className="comment-button">
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
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default PhotoDetail;
