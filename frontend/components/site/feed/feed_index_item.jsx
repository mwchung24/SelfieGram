import React from 'react';
import { Link } from 'react-router-dom';
import CommentFeedContainer from '../comment/comment_feed_container';

class feedIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      liking: false,
    };

  }
}

export default feedIndexItem;
