import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = () => (
  <nav>

  </nav>
);

const Greeting = (props) => {
  return props.currentUser ? personalGreeting(props.currentUser, props.logout) : sessionLinks();
};

const personalGreeting = (currentUser, logout) => {
  return (
    <nav className="header">
      <h2>Hello, {currentUser.username}</h2>
      <button onClick={logout}>Log Out</button>
    </nav>
  );
};

export default Greeting;
