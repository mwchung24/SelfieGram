import React from 'react';
import { Link } from 'react-router-dom';
import SearchContainer from './search_container';
import CreatePhotoContainer from './create_photo_container';

const sessionLinks = () => (
  <nav>

  </nav>
);

const Header = (props) => {
  return props.username ? personalGreeting(props.username, props.logout, props) : sessionLinks();
};

const personalGreeting = (username, logout, props) => {
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
          <Link className="profileButton" to={`/users/${username}`}><img className="profileIcon" src={ window.images.profile } /></Link>
          <Link className="exploreButton" to={`/explore`}><img className="compassIcon" src={ window.images.compass } /></Link>
          <button className="uploadButton" onClick={() => props.openModal(<CreatePhotoContainer />)}>
            <img className="uploadIcon" src={ window.images.upload } />
          </button>
          <button className="logoutButton" onClick={logout}><img className="logoutIcon" src={ window.images.logout } /></button>
        </nav>

      </div>
    </section>
  );
};

export default Header;
