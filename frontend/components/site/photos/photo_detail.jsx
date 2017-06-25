import React from 'react';
import { Link } from 'react-router-dom';

class PhotoDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // debugger
    this.props.fetchPhoto(this.props.id);
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
                <section className="like-comment">
                  <button className="like-button">
                    <i className="fa fa-heart-o" aria-hidden="true"></i>
                  </button>
                  <button className="comment-button">
                    <i className="fa fa-comment-o" aria-hidden="true"></i>
                  </button>
                </section>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default PhotoDetail;
