import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HeaderContainer from './header/header_container';
import UserContainer from './user/user_container';
// import Search from './header/search_container';

// import FeedContainer from './feed/feed_container';
// import ProfileContainer from './profile/profile_container';
// import Account from './account/account';
// import UploadModal from './nav/upload_modal';

class Site extends React.Component {
  render() {
    return (
      <header>
        <HeaderContainer />
        This is the Photo Feed
        <Route path="/users/:id" component={UserContainer} />
      </header>
    );
  }
}

export default Site;
// <NavContainer />
//
// <Switch>
//   <Route path="/account/:formType" component={Account} />
//   <Route path="/user/:userId" component={ProfileContainer} />
//   <Route path="/" component={FeedContainer} />
// </Switch>
//
// <div className="floating-upload">
//   <UploadModal floatingUpload={true} />
// </div>
