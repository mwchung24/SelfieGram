import React from 'react';
import Dropzone from 'react-dropzone';

class EditProfilePic extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      photo: "",
      imageFile: null,
      imageUrl: null
    };

    this.updateFile = this.updateFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.updateDraggedFile = this.updateDraggedFile.bind(this);
  }

  updateFile (e) {
    let file = e.currentTarget.files[0];
    let fileReader = new FileReader();
    fileReader.onloadend = function() {
      this.setState({imageFile: file, imageUrl: fileReader.result });
    }.bind(this);

    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  updateDraggedFile (e) {
    let file = e[0];
    let fileReader = new FileReader();
    fileReader.onloadend = function() {
      this.setState({imageFile: file, imageUrl: fileReader.result });
    }.bind(this);

    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  handleSubmit (e) {
    let formData = new FormData();
    formData.append("user[photo]", this.state.imageFile);
    this.props.updateUserPic(formData, this.props.user.id)
    .then(() => this.props.closeModal());
  }

  handleCancel (e) {
    return this.props.closeModal();
  }

  render () {
    return (
      <div className="uploadModal" onClick={(e) => e.stopPropagation()}>
        <div className="uploadForm">
          <span className="uploadHeader">
            Upload Your New Profile Picture!
          </span>
          <img className="imagePrev" src={ this.state.imageUrl } />
          <Dropzone className="drag-and-drop" onDrop={this.updateDraggedFile}>Drag and Drop Image Here</Dropzone>
          <div className="OR">OR</div>
          <input className="uploadFile" type="file" onChange={this.updateFile} />
          <div className="buttons">
            <button className="uploadFormButton" onClick={this.handleSubmit}>Submit!</button>
            <button className="uploadFormCancel" onClick={this.handleCancel}>Cancel</button>
          </div>
        </div>
      </div>
    );
  }

}

export default EditProfilePic;
