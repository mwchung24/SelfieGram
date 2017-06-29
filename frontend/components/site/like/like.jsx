import React from 'react';
import merge from 'lodash/merge';

class Like extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   body: '',
    // };
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  // update(body) {
  //   return (e) => {
  //     e.preventDefault();
  //
  //     this.setState({[body]: e.currentTarget.value});
  //   };
  // }
  //
  // handleSubmit(e) {
  //   e.preventDefault();
  //
  //   if (this.state.body) {
  //     const comment = merge({}, this.state, {photo_id: this.props.photoId});
  //     this.props.addComment(comment)
  //       .then(() => this.setState({body: ''}));
  //       // .then(() => this.props.fetchPhoto(this.props.photoId));
  //   }
  // }

  render() {
    if(this.props.photo.liked) {
      return (
        <button className="liked" onClick={ () => this.props.deleteLike(this.props.photo.like_id).then(() => this.props.fetchPhoto(this.props.photo.id))}>
          <i className="fa fa-heart" aria-hidden="true"></i>
        </button>
      );
    } else {
      return (
        <button className="like-button" onClick={ () => this.props.addLike(this.props.photo.id).then(() => this.props.fetchPhoto(this.props.photo.id))}>
          <i className="fa fa-heart-o" aria-hidden="true"></i>
        </button>
      );
    }
  }
}

export default Like;
