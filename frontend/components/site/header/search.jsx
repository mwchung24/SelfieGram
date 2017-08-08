import React from 'react';
import { Link } from 'react-router-dom';
const debounce = require('lodash/debounce');

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
    this.Users = this.Users.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleListClick = this.handleListClick.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.debouncing = debounce(this.handleSearch, 300);
  }

  focus(boolean) {
    return (() => {
      this.setState({focused: boolean});
    });
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  handleSearch () {
    this.props.fetchUsers(this.state.keyword);
  }

  handleChange(e) {
    this.setState({keyword: e.currentTarget.value});
    if (e.currentTarget.value !== "") {
      this.debouncing();
    }
  }

  handleClick(e) {
    this.setState({keyword: ""});
    $(".searchResults input").val("");
  }

  handleListClick(e) {
    this.setState({keyword: ""});
    $(".searchResults input").val("");
    this.props.clearUsers();
  }

  Users() {
    if (this.state.focused) {
      if (this.state.keyword === "") {
        return;
      }
      let users = (this.props.search).map( (user) => {
        return (
          <li className="UsersListed" key={user.id} onClick={this.handleListClick}>
            <Link onClick={this.handleClick} onMouseDown={this.handleSubmit} className="usersLinksToRedirect" to={`/users/${user.username}`}>
              <div className="searchResultPhoto">
                <img src={user.photo_url}></img>
              </div>
              <div className="searchUsernameName">
                <div className="searchResultUsername">
                  {user.username}
                </div>
                <div className="searchResultName">
                  {user.name}
                </div>
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
                onFocus={this.focus(true)}
                onBlur={this.focus(false)}
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
