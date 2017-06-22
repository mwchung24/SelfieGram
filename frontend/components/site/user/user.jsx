import React from 'react';
import { Link } from 'react-router-dom';

class User extends React.Component {
  constructor(props) {
    super(props);

    // this.fetchUser = this.fetchUser.bind(this);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.match.params.id);
  }

  render() {
    return (
      <section>
        This is the Profile Page
        {this.props.user.username}
        {this.props.user.name}
      </section>
    );
  }
}

export default User;
