import React from 'react';

class Feed extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount () {
    this.props.fetchFeedPhotos(this.props.state.session.currentUser.username);
  }

  render () {
    debugger
    return (
      <div>hi</div>
    );
  }
}

export default Feed;
