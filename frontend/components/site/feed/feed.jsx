import React from 'react';
import { selectAllImages } from '../../../reducers/selectors';

class Feed extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount () {
    this.props.fetchFeedPhotos(this.props.state.session.currentUser.username);
  }

  // componentWillReceiveProps() {
  //   this.props.fetchUser(this.props.state.session.currentUser.username);
  //   // .then ( () => this.props.history.push('/'));
  // }

  render () {

    const feed = selectAllImages(this.props.state.feed);
    let FeedPhotos;

    if (feed) {
      FeedPhotos = feed.map( (photo) => {
        return (
          <li key={photo.id}>
            <img src={photo.images_url}/>
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
