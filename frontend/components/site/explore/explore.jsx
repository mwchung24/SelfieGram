import React from 'react';
import { Link } from 'react-router-dom';

class Explore extends React.Component {
  constructor(props) {
    super(props);

    this.Users = this.Users.bind(this);
    this.followButton = this.followButton.bind(this);
  }

  componentDidMount () {
    this.props.fetchUsers();
  }

  componentWillUnmount () {
    this.props.deleteUsers();
  }

  Users() {

    if (this.props.users.length === 0) {
      return(
        <div className="progress-bar"></div>
      );
    }

    let users = (this.props.users).map( (user) => {
      return (
        <li className="UsersListed" key={user.id}>
          <div className="ExploreRedirect">
            <div className="ExplorePhoto">
              <Link to={`/users/${user.username}`}><img src={user.photo_url}></img></Link>
            </div>
            <div className="ExploreUsernameName">
              <div className="ExploreResultUsername">
                <Link className="ExploreLinks" to={`/users/${user.username}`}>{user.username}</Link>
              </div>
              <div className="ExploreResultName">
                <Link className="ExploreLinks ExploreLinksName" to={`/users/${user.username}`}>{user.name}</Link>
              </div>
            </div>
          </div>
          {this.followButton(user)}
        </li>
      );
    });
    return users;
  }

  followButton (user) {

    let followers = user.followers;

    for (let i = 0; i < followers.length; i++) {
      if (followers[i]) {
        if (followers[i].id === this.props.currentUserId) {
          return (
            <button
              className="following-button explorebutton"
              onClick={() => this.props.deleteExploreFollow(user.id).then(() => this.props.fetchUsers())}>
              Following
            </button>
          );
        }
      }

    }
    return (
      <button
        className="follow-button explorebutton"
        onClick={() => this.props.addFollow(user.id).then(() => this.props.fetchUsers())}>
        Follow
      </button>
    );
  }

  render() {
    return (
      <section className="exploreUsers">
        <div>
          <ul>
            {this.Users()}
          </ul>
        </div>
      </section>
    );
  }
}

export default Explore;
