import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HeaderContainer from './header/header_container';
import UserContainer from './user/user_container';
import FeedContainer from './feed/feed_container';
import EditUserContainer from './user/edit_user_container';
import ExploreContainer from './explore/explore_container';

class Site extends React.Component {
  render() {
    return (
      <header>
        <HeaderContainer />
        <Route exact path="/users/:id" component={UserContainer} />
        <Route exact path="/" component={FeedContainer} />
        <Route exact path="/users/:id/edit" component={EditUserContainer} />
        <Route exact path="/explore" component={ExploreContainer} />
      </header>
    );
  }
}

export default Site;
