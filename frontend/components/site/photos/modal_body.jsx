import React from 'react';
import { Link } from 'react-router-dom';

class ModalBody extends React.Component {
  constructor(props) {
    super(props);

    this.modalClose = this.modalClose.bind(this);
  }

  modalClose() {
    this.props.closeModal();
  }

  render () {
    let allPhotoComments = this.props.allPhotoComments;
    return(
      <div>
        <div className="caption">
          <p>
            <Link className="username-link-caption"
              to={`/users/${this.props.username}`}
              onClick={ () => this.modalClose()}>{this.props.username}
            </Link>
            <span className="photo-caption">
              {this.props.photo.caption}
            </span>
          </p>
        </div>
        <div className="comments-wrapper">
          <p>
            <span className="comments">
              <ul>
                {allPhotoComments}
              </ul>
            </span>
          </p>
        </div>
      </div>
    );
  }
}

export default ModalBody;
