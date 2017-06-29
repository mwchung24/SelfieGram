import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HeaderContainer from './header/header_container';
import UserContainer from './user/user_container';
import FeedContainer from './feed/feed_container';
import EditUserContainer from './user/edit_user_container';
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
        <Route exact path="/users/:id" component={UserContainer} />
        <Route exact path="/" component={FeedContainer} />
        <Route exact path="/users/:id/edit" component={EditUserContainer} />
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
