import React from 'react';
import { selectAllImages } from '../../../reducers/selectors';

class Feed extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount () {
    this.props.fetchFeedPhotos();
  }

  render () {

    const feed = selectAllImages(this.props.feed);
    let FeedPhotos;

    if (feed) {
      FeedPhotos = feed.map( (photo) => {
        return (
          <li className="photo-wrap" key={photo.id}>
            <img className="photo-on-feed" src={photo.images_url}/>
          </li>
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
