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
        <div className="two-logos">
          <Link className="backToFeed" to="/">
            <div className="logo-photo">
              <img className="selfieLogo" src={ window.images.logo} />
            </div>

            <div>
              <h1 className="selfiegram-header">SelfieGram</h1>
            </div>
          </Link>
        </div>

        <SearchContainer />

        <nav className="rightNav">
          <Link className="profileButton" to={`/users/${currentUser.username}`}><img className="profileIcon" src={ window.images.profile } /></Link>
          <button className="uploadButton"><img className="uploadIcon" src={ window.images.upload } /></button>
          <button className="logoutButton" onClick={logout}><img className="logoutIcon" src={ window.images.logout } /></button>
        </nav>

      </div>
    </section>
  );
};
// <button className="profileButton"><img className="profileIcon" src={ window.images.profile } /></button>

export default Header;
