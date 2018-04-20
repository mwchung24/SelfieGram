import React from 'react';
import { Link } from 'react-router-dom';
import CommentContainer from '../comment/comment_container';
import ModalHeader from './modal_header';
import ModalBody from './modal_body';
import ModalBottom from './modal_bottom';

class PhotoInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      liking: false,
    };

    this.setState = this.setState.bind(this);
    this.photoLiked = this.photoLiked.bind(this);
  }

  photoLiked () {
    if (this.props.photo.liked) {
      return this.props.deleteLike(this.props.photo.like_id)
      .then(() => setTimeout( () => this.setState({liking: false}), 1000));
    } else {
      return this.props.addLike(this.props.photo.id)
      .then(() => setTimeout( () => this.setState({liking: false}), 1000));
    }
  }

  render() {
    let allPhotoComments = this.props.allPhotoComments;
    const heartClass = this.state.liking ? "fa fa-heart feedLike liking" : "fa fa-heart feedLike";

    if(!this.props.photo.images_url) {
      return (
        <div>
          <div className="progress-bar"></div>
          <div className="loading"></div>
        </div>
      );
    } else {
      return (
        <section>

          <div className="wholeModal" onClick={(e) => e.stopPropagation()}>
            <div className="imageContainer">
              <div className="photoDetailHeart"><i className={heartClass} aria-hidden="true"></i></div>
              <img className="imageModal" src={this.props.photo.images_url} onDoubleClick={ () => {this.setState({liking: true}); this.photoLiked();}} />
              <div className="rightModal">
                <ModalHeader
                  username={this.props.username}
                  photoURL={this.props.photoURL}
                  closeModal={this.props.closeModal}
                  deletePhoto={this.props.deletePhoto}
                  fetchUser={this.props.fetchUser}
                  photo={this.props.photo}
                  />
                <div className="bodyModal">
                  <ModalBody
                    allPhotoComments={allPhotoComments}
                    username={this.props.username}
                    photo={this.props.photo}
                    />
                  <ModalBottom
                    photo={this.props.photo}
                    />

                </div>
              </div>
            </div>
          </div>

          <div className="rightModal2" onClick={(e) => e.stopPropagation()}>
            <ModalHeader
              username={this.props.username}
              photoURL={this.props.photoURL}
              closeModal={this.props.closeModal}
              deletePhoto={this.props.deletePhoto}
              fetchUser={this.props.fetchUser}
              photo={this.props.photo}
              />
            <div className="bodyModal">
              <ModalBody
                allPhotoComments={allPhotoComments}
                username={this.props.username}
                photo={this.props.photo}
                closeModal={this.props.closeModal}
                />
              <ModalBottom
                photo={this.props.photo}
                />
            </div>
          </div>

          <section className="photo-comment-form2" onClick={(e) => e.stopPropagation()}>
            <CommentContainer photoId={this.props.photo.id} />
          </section>
        </section>
      );

    }

  }


}

export default PhotoInfo;
