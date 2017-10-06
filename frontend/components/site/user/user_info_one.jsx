import React from 'react';
import { Link } from 'react-router-dom';

class UserInfoOne extends React.Component {
  constructor(props) {
    super(props);

    this.isCurrentUser = this.isCurrentUser.bind(this);
  }

  isCurrentUser () {
    if(this.props.currentUserId === this.props.user.id) {
      return (<Link className="edit-profile" to={`/users/${this.props.currentUsername}/edit`}>Edit Profile</Link>);
    } else {
      if (this.props.user.followers) {
        if (Object.keys(this.props.user.followers).includes(this.props.currentUserId.toString())) {
          return (<button className="following-button" onClick={() => this.props.deleteFollow(this.props.user.id).then(() => this.props.fetchUser(this.props.user.username))}>Following</button>);
        }
      }
      return (<button className="follow-button" onClick={() => this.props.addFollow(this.props.user.id).then(() => this.props.fetchUser(this.props.user.username))}>Follow</button>);
    }
  }

  render () {
    return (
      <div className="first">
        <div className="profile-username">{this.props.user.username}</div>
        <div>
          {this.isCurrentUser()}
        </div>
      </div>
    );
  }
}

export default UserInfoOne;
