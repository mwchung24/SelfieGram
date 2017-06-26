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
  }

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
    let formData = new FormData();
    formData.append("photo[caption]", this.state.caption);
    formData.append("photo[image]", this.state.imageFile);
    this.props.uploadPhoto(formData);
    this.props.closeModal();
  }

  render () {
    // //debugger
    return (
      <div onClick={(e) => e.stopPropagation()}>
        Upload an Image!

        <input type="text" onChange={this.updateBody} />
        <input type="file" onChange={this.updateFile} />
        <button onClick={this.handleSubmit}>Upload Image!</button>
        <img src={ this.state.imageUrl } />
      </div>
    );
  }
}

export default CreatePhoto;
