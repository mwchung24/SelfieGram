import React from 'react';
import { Link } from 'react-router-dom';

class PhotoDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // //debugger
    this.props.fetchPhoto(this.props.id);
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

    return MONTH[this.props.state.photo.createdAtMonth];
  }

  render () {
    if (this.props.state) {
      return (
        <div className="wholeModal" onClick={(e) => e.stopPropagation()}>
          <div className="imageContainer">
            <img className="imageModal" src={this.props.state.photo.images_url} />
            <div className="rightModal">
              <div className="headerModal">
                <div className="user-profile-modal">
                  <Link to={`/users/${this.props.state.user.username}`} onClick={ () => this.props.closeModal()}><img className="user-profile-pic" src={this.props.state.user.photo_url}/></Link>
                </div>
                <div className="user-username">
                  <div><Link className="username-link" to={`/users/${this.props.state.user.username}`} onClick={ () => this.props.closeModal()}>{this.props.state.user.username}</Link></div>
                </div>
              </div>
              <div className="bodyModal">
                <div>
                  <div className="caption">
                    <p>
                      <Link className="username-link-caption"
                        to={`/users/${this.props.state.user.username}`}
                        onClick={ () => this.props.closeModal()}>{this.props.state.user.username}
                      </Link>
                      <span className="photo-caption">
                        {this.props.state.photo.caption}
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
                <div className="bottom">
                  <section className="like-comment">
                    <button className="like-button">
                      <i className="fa fa-heart-o" aria-hidden="true"></i>
                    </button>
                    <button className="liked">
                      <i className="fa fa-heart" aria-hidden="true"></i>
                    </button>
                    <button className="comment-button">
                      <i className="fa fa-comment-o" aria-hidden="true"></i>
                    </button>
                  </section>
                  <span className="num-of-like-on-photo">
                    # likes
                  </span>
                  <div className="uploadedAt">
                    <span className="month">
                      {this.month()}
                    </span>
                    <span className="day">
                      {this.props.state.photo.createdAtDay},
                    </span>
                    <span className="year">
                      {this.props.state.photo.createdAtYear}
                    </span>
                  </div>
                  <section className="photo-comment-form">
                    <form>
                      <textarea className="add-comment" placeholder="Add a comment..."></textarea>
                    </form>
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
