import React from 'react';
import { Link } from 'react-router-dom';

class ModalHeader extends React.Component {
  constructor(props) {
    super(props);

    this.modalClose = this.modalClose.bind(this);
  }

  delete() {
    this.props.deletePhoto(this.props.photo)
    .then(() => this.props.closeModal())
    .then(() => this.props.fetchUser(this.props.username));
  }

  modalClose() {
    this.props.closeModal();
    this.deleteIcon = this.deleteIcon.bind(this);
  }

  deleteIcon() {
    if (this.props.userId === this.props.currentUserId){
      return (
        <button className="delete-photo-icon" onClick={ () => this.delete()}>
          <i className="fa fa-trash-o" aria-hidden="true"></i>
        </button>
      );
    } else {
      return (<div></div>);
    }
  }

  render () {
    return (
      <div className="headerModal">
        <div className="user-profile-modal">
          <Link to={`/users/${this.props.username}`} onClick={ () => this.modalClose()}><img className="user-profile-pic" src={this.props.photoURL}/></Link>
        </div>
        <div className="user-username">
          <div><Link className="username-link" to={`/users/${this.props.username}`} onClick={ () => this.modalClose()}>{this.props.username}</Link></div>
        </div>
        <div className="delete-photo">
          {this.deleteIcon()}
        </div>
      </div>
    );
  }
}

export default ModalHeader;
