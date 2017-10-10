import React from 'react';
import { Link } from 'react-router-dom';

class FeedCaption extends React.Component {
  constructor(props) {
    super(props);

  }

  render () {
    let photo = this.props.photo;
    return (
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
    );
  }
}

export default FeedCaption;
