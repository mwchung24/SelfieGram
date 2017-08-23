import React from 'react';
import { Link } from 'react-router-dom';
import CommentContainer from '../comment/comment_container';
import { selectAllComments } from '../../../reducers/selectors';
import LikeContainer from '../like/like_container';

class PhotoDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      liking: false,
    };

    this.deleteIcon = this.deleteIcon.bind(this);
    this.likeOrLikes = this.likeOrLikes.bind(this);
    this.photoLiked = this.photoLiked.bind(this);
    this.setState = this.setState.bind(this);
    this.modalClose = this.modalClose.bind(this);
    this.deleteComment = this.deleteComment.bind(this);
    this.userInfo = this.userInfo.bind(this);
  }

  componentDidMount() {
    this.props.fetchPhoto(this.props.id);
  }

  componentWillUnmount() {
    this.props.deletePhotoFromState();
  }

  delete() {
    this.props.deletePhoto(this.props.photo)
    .then(() => this.props.closeModal())
    .then(() => this.props.fetchUser(this.props.username));
  }

  modalClose() {
    this.props.closeModal();
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

  likeOrLikes () {
    if(this.props.photo) {
      if (this.props.photo.like_count === 1) {
        return "like";
      } else {
        return "likes";
      }
    }
  }

  photoLiked () {
    if (this.props.photo.liked) {
      return this.props.deleteLike(this.props.photo.like_id)
      .then(() => setTimeout( () => this.setState({liking: false}), 1000));
    } else {
      return this.props.addLike(this.props.photo.id)
      .then(() => setTimeout( () => this.setState({liking: false}), 1000));
    }
  }

  deleteComment (comment) {
    const deleteCommentIcon = () => {

      if (this.props.currentUsername === comment.username) {
        return (
          <button
            className="delete-comment">
            <i
              onClick={() => this.props.deleteComment(comment.id)}
              className="fa fa-times"
              aria-hidden="true">
            </i>
          </button>
        );
      } else {
        return (
          <div></div>
        );
      }
    };

    return (
      <li key={comment.id} className="comment-item">
        <div className="comment-username-and-comment">
          <p className="comment-username">
            <Link
              className="username-link"
              to={`/users/${comment.username}`}
              onClick={ () => this.modalClose()}>
              {comment.username}
            </Link>
            <span className="comment-body">
              {comment.body}
            </span>
          </p>
        </div>
        {deleteCommentIcon()}
      </li>
    );
  }

  userInfo(allPhotoComments) {
    const heartClass = this.state.liking ? "fa fa-heart feedLike liking" : "fa fa-heart feedLike";
    return (
      <section>

        <div className="wholeModal" onClick={(e) => e.stopPropagation()}>
          <div className="imageContainer">
            <div className="photoDetailHeart"><i className={heartClass} aria-hidden="true"></i></div>
            <img className="imageModal" src={this.props.photo.images_url} onDoubleClick={ () => {this.setState({liking: true}); this.photoLiked();}} />
            <div className="rightModal">
              <div className="headerModal">
                <div className="user-profile-modal">
                  <Link to={`/users/${this.props.username}`} onClick={ () => this.modalClose()}><img className="user-profile-pic" src={this.props.photo_url}/></Link>
                </div>
                <div className="user-username">
                  <div><Link className="username-link" to={`/users/${this.props.username}`} onClick={ () => this.modalClose()}>{this.props.username}</Link></div>
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
                        onClick={ () => this.modalClose()}>{this.props.username}
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

              </div>
            </div>
          </div>
        </div>

        <div className="rightModal2" onClick={(e) => e.stopPropagation()}>
          <div className="headerModal">
            <div className="user-profile-modal">
              <Link to={`/users/${this.props.username}`} onClick={ () => this.modalClose()}><img className="user-profile-pic" src={this.props.photo_url}/></Link>
            </div>
            <div className="user-username">
              <div><Link className="username-link" to={`/users/${this.props.username}`} onClick={ () => this.modalClose()}>{this.props.username}</Link></div>
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
                    onClick={ () => this.modalClose()}>{this.props.username}
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

          </div>
        </div>

        <section className="photo-comment-form2" onClick={(e) => e.stopPropagation()}>
          <CommentContainer photoId={this.props.photo.id} />
        </section>
      </section>
    );
  }

  render () {

    if (this.props.photo) {

      const comments = selectAllComments(this.props.photo.comments);
      let allPhotoComments;

      if (comments) {
        allPhotoComments = comments.map( (comment) => {
          return this.deleteComment(comment);
        });
      }

      return this.userInfo(allPhotoComments);
    }
  }
}

export default PhotoDetail;
