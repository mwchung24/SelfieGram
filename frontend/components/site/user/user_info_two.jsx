import React from 'react';
import { Link } from 'react-router-dom';
import FollowerContainer from '../follow/follower_container';
import FolloweeContainer from '../follow/followee_container';

class UserInfoTwo extends React.Component {
  constructor(props) {
    super(props);

  }

  render () {
    let allUserPhotos = this.props.allUserPhotos;
    return (
      <div className="second">
        <div className="user-stats">
          <div className="number-of-posts"><span className="number-posts">{allUserPhotos.length}</span> posts</div>
          <div>
            <button className="followButton" onClick={() => this.props.openModal(<FollowerContainer />)}>
              <span
                className="number-follow"
                >
                {this.props.user.followers_count}
              </span> followers
            </button>
          </div>
          <div>
            <button className="followButton" onClick={() => this.props.openModal(<FolloweeContainer />)}>
              <span
                className="number-follow"
                >
                {this.props.user.followees_count}
              </span> following
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default UserInfoTwo;
