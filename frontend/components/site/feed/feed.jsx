import React from 'react';
import { selectAllImages } from '../../../reducers/selectors';
import { Link } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll';
import FeedIndexItem from './feed_index_item';

class Feed extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      start: 0,
      end: -1,
      endingIndex: 4,
    };

    this.setState = this.setState.bind(this);
    this.fetchMorePhotos = this.fetchMorePhotos.bind(this);
  }

  componentDidMount () {
    window.bottom = false;
    window.addEventListener("scroll", this.fetchMorePhotos);
    this.props.fetchFeedPhotos(this.state.start, this.state.end);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.fetchMorePhotos);
    this.props.removeFeed();
  }

  fetchMorePhotos() {
    $(window).scroll(function() {
      if ($(window).scrollTop() <= $(document).height() - $(window).height() && $(window).scrollTop() >= $(document).height() - $(window).height() - 200) {
       window.bottom = true;
     }
    });
    if(window.bottom) {
      this.setState({endingIndex: this.state.endingIndex + 5});
      window.bottom = false;
    }
  }

  render () {
    const feed = selectAllImages(this.props.feed).reverse()
    .slice(0, this.state.endingIndex);

    if (this.props.followees !== 0) {
      if (feed.length === 0) {
        return(
          <div className="progress-bar"></div>
        );
      }
    }

    let FeedPhotos;
    if (feed) {
      FeedPhotos = feed.map( (photo) => {
        return (
          <FeedIndexItem
            key={photo.id}
            photo={photo}
            deleteFeedLike={this.props.deleteFeedLike}
            addFeedLike={this.props.addFeedLike}
            deleteFeedComment={this.props.deleteFeedComment}
            username={this.props.username}
          />
        );
      });
    }

    return (
      <section>
        <div>
          <ul>
            {FeedPhotos}
          </ul>
        </div>
      </section>
    );
  }
}


export default Feed;
