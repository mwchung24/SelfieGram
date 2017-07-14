import React from 'react';
import { Link } from 'react-router-dom';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      keyword: '',
      focused: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.focus = this.focus.bind(this);
    this.unfocus = this.unfocus.bind(this);
    this.Users = this.Users.bind(this);
    this.keepLinks = this.keepLinks.bind(this);
  }

  focus() {
    this.setState({focused: true});
  }

  unfocus() {
    this.setState({focused: false});
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  handleChange(e) {
    this.props.fetchUsers(e.currentTarget.value);
  }

  keepLinks(e) {
    e.preventDefault();
    // this.unfocus();
    // this.Users();
  }

  Users() {
    if (this.state.focused) {
      let users = (this.props.search).map( (user) => {
        return (
          <li className="UsersListed" key={user.id}>
            <Link onMouseDown={this.keepLinks} className="usersLinksToRedirect" to={`/users/${user.username}`}>
              <div>
                {user.username}
              </div>
            </Link>
          </li>
        );
      });
      return users;
    } else {
      return;
    }
  }

  render () {
    return (
      <section className="searchResults">
        <div className="search">
          <form onSubmit={this.handleSubmit}>
            <label>
              <i className="fa fa-search" aria-hidden="true"></i>
              <input type="text"
                onClick={this.handleChange}
                onChange={this.handleChange}
                onFocus={this.focus}
                onBlur={this.unfocus}
                placeholder="Search"
                className="searchbar"
                />
            </label>
          </form>
        </div>
        <div>
          <ul className="searchUsers">
            {this.Users()}
          </ul>
        </div>
      </section>
    );

  }
}



export default Search;
