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
                  <img className="user-profile-pic" src={this.props.state.user.photo_url}/>
                </div>
                <div className="user-username">
                  <div>{this.props.state.user.username}</div>
                </div>
              </div>
              <div className="photo-comments">
                comments go here
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default PhotoDetail;
