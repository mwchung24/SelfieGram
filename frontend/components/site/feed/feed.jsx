import React from 'react';
import { selectAllImages } from '../../../reducers/selectors';
import { Link } from 'react-router-dom';

class Feed extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

    // this.likeButton = this.likeButton.bind(this);
  }

  componentDidMount () {
    this.props.fetchFeedPhotos();
  }

  // componentWillReceiveProps () {
  //   this.props.fetchFeedPhotos();
  // }

  // month() {
  //   const MONTH = {
  //     1: "JANUARY",
  //     2: "FEBRUARY",
  //     3: "MARCH",
  //     4: "APRIL",
  //     5: "MAY",
  //     6: "JUNE",
  //     7: "JULY",
  //     8: "AUGUST",
  //     9: "SEPTEMBER",
  //     10: "OCTOBER",
  //     11: "NOVEMBER",
  //     12: "DECEMBER"
  //   };
  //
  //   return MONTH[this.props.feed.photo.createdAtMonth];
  // }

  render () {
    const feed = selectAllImages(this.props.feed).reverse();
    let FeedPhotos;
    let propsprops = this.props;
    if (feed) {
      FeedPhotos = feed.map( (photo) => {
        const likeButton = () => {
          if(photo.liked) {
            return (
              <button className="liked" onClick={ () => this.props.deleteLike(photo.like_id).then(() => this.props.fetchFeedPhotos())}>
                <i className="fa fa-heart" aria-hidden="true"></i>
              </button>
            );
          } else {
            return (
              <button className="like-button" onClick={ () => this.props.addLike(photo.id).then(() => this.props.fetchFeedPhotos())}>
                <i className="fa fa-heart-o" aria-hidden="true"></i>
              </button>
            );
          }
        };

        const likeOrLikes = () => {
            if(photo) {
              if (photo.like_count === 1) {
                return "like";
              } else {
                return "likes";
              }
            }
          };

        return (
          <li className="photo-wrap" key={photo.id}>
            <div className="photoFeedImage">
              <div className="photoFeedHeader">
                <Link to={`/users/${photo.username}`}><img className="user-profile-pic photoFeedProfilePic" src={photo.profile_pic}/></Link>
                <Link to={`/users/${photo.username}`} className="photoFeedUsername">{photo.username}</Link>
              </div>
              <img className="photo-on-feed" src={photo.images_url}/>
              <div className="bottom bottom-feed">
                <section className="like-comment">
                  {likeButton()}
                  <button className="comment-button">
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
                        This is where comments go.. This is where comments go.. This is where comments go.. This is where comments go..
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
                  <form>
                    <textarea className="add-comment" placeholder="Add a comment..."></textarea>
                  </form>
                </section>
              </div>
            </div>
          </li>
        );
      });
    }

    return (
      <section>
        <div>
          <ul>
            {FeedPhotos}
          </ul>
        </div>
      </section>
    );
  }
}

export default Feed;
