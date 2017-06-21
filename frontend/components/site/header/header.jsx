import React from 'react';
import { Link } from 'react-router-dom';
import SearchContainer from './search_container';

const sessionLinks = () => (
  <nav>

  </nav>
);

const Header = (props) => {
  return props.currentUser ? personalGreeting(props.currentUser, props.logout) : sessionLinks();
};

const personalGreeting = (currentUser, logout) => {
  return (
    <section className="header">
      <div className="header-elements">
        <Link className="backToFeed" to="/">
          <div className="logo-photo">
            <img className="selfieLogo" src="assets/selfieLogo.png" />
          </div>

          <div className="headeror-line">
            <div className="headeror-line-line"></div>
            <div className="headeror-line-line"></div>
          </div>

          <div>
            <h1 className="selfiegram-header">SelfieGram</h1>
          </div>
        </Link>

        <SearchContainer />

        <nav>
          <button onClick={logout}>Log Out</button>
        </nav>

      </div>
    </section>
  );
};
// <Link onClick={logout}><img className="logout" src="assets/logout.png" /></Link>

export default Header;
