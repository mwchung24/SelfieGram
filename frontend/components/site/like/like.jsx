import React from 'react';
import merge from 'lodash/merge';

class Like extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    if(this.props.photo.liked) {
      return (
        <button className="liked" onClick={ () => this.props.deleteLike(this.props.photo.like_id)
          }>
          <i className="fa fa-heart" aria-hidden="true"></i>
        </button>
      );
    } else {
      return (
        <button className="like-button" onClick={ () => this.props.addLike(this.props.photo.id)
          }>
          <i className="fa fa-heart-o" aria-hidden="true"></i>
        </button>
      );
    }
  }
}

export default Like;
