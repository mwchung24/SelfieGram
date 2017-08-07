import React from 'react';

class Modal extends React.Component {
  constructor(props){
    super(props);
    this.modalClose = this.modalClose.bind(this);
  }

  modalClose() {
    this.props.closeModal();
    this.props.deletePhotoFromState();
  }

  render () {
    if(this.props.open) {

      return (
        <div className="fullModal" onClick={ () => this.modalClose()}>
          <div className="modalContent">
            {this.props.component}
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Modal;
