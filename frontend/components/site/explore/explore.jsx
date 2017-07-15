import React from 'react';
import { Link } from 'react-router-dom';

class Explore extends React.Component {
  constructor(props) {
    super(props);

    this.Users = this.Users.bind(this);
  }

  componentDidMount () {
    this.props.fetchUsers();
  }

  Users() {
    let users = (this.props.users).map( (user) => {
      return (
        <li className="UsersListed" key={user.id}>
          <Link className="ExploreRedirect" to={`/users/${user.username}`}>
            <div className="ExplorePhoto">
              <img src={user.photo_url}></img>
            </div>
            <div className="ExploreUsernameName">
              <div className="ExploreResultUsername">
                {user.username}
              </div>
              <div className="ExploreResultName">
                {user.name}
              </div>
            </div>
          </Link>
        </li>
      );
    });
    return users;
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
