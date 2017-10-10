import React from 'react';
import { Link } from 'react-router-dom';

class FeedPhotoHeader extends React.Component {
  constructor(props) {
    super(props);

  }

  render () {
    let photo = this.props.photo;
    return(
      <div className="photoFeedHeader">
        <Link to={`/users/${photo.username}`}><img className="user-profile-pic photoFeedProfilePic" src={photo.profile_pic}/></Link>
        <Link to={`/users/${photo.username}`} className="photoFeedUsername">{photo.username}</Link>
      </div>
    );
  }
}

export default FeedPhotoHeader;
