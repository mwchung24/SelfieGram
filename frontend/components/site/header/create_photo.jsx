import React from 'react';

class CreatePhoto extends React.Component {
  constructor(props) {
    super(props);

    this.state = ({
      caption: "",
      imageFile: null,
      imageUrul: null
    });

    this.updateFile = this.updateFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  // componentDidMount () {
  //   this.props.receiveCurrentUser(this.props.state.session.currentUser);
  // }

  // componentWillReceiveProps() {
  //   this.props.fetchUser(this.props.state.user);
  // }

  updateBody (e) {
    this.setState({
      body: e.target.value
    });
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

  handleSubmit (e) {
    // debugger
    let formData = new FormData();
    formData.append("photo[caption]", this.state.caption);
    formData.append("photo[image]", this.state.imageFile);
    this.props.uploadPhoto(formData)
    .then(() => this.props.closeModal())
    .then(() => this.props.fetchUser(this.props.state.user.username));
  }

  handleCancel (e) {
    return this.props.closeModal();
  }


  render () {
    // debugger
    return (
      <div className="uploadModal" onClick={(e) => e.stopPropagation()}>
        <div className="uploadForm">
          <span className="uploadHeader">
            Upload an Image!
          </span>
          <img className="imagePrev" src={ this.state.imageUrl } />
          <input type="file" onChange={this.updateFile} />
          <input className="captionUpload" type="text" placeholder="Caption" onChange={this.updateBody} />
          <div className="buttons">
            <button onClick={this.handleSubmit}>Upload Image!</button>
            <button onClick={this.handleCancel}>Cancel</button>
          </div>
        </div>
      </div>
    );
  }
}

export default CreatePhoto;
