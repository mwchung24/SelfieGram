import React from 'react';

class EditUser extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount () {
    this.props.fetchUser(this.props.match.params.id);
  }

  render() {
    // debugger
    return (
      <div className="editPage">
        <div className="wholeEditPage">
          <div className="editPageLeft">
            <div className="editProfileWord">Edit Profile</div>
          </div>
          <div className="editForm">
            <div className="editHeader">
              <img className="profile-pic edit-profile-pic" src={this.props.user.photo_url}/>
              <div className="edit-user-username">{this.props.user.username}</div>
            </div>
            <form className="formInputFields">
              <div className="editName">
                <div>Name</div>
                <input value={this.props.user.name}></input>
              </div>
              <div className="editUsername">
                <div>Username</div>
                <input value={this.props.user.username}></input>
              </div>
              <div className="editBio">
                <div>Bio</div>
                <textarea value={this.props.user.bio}></textarea>
              </div>
              <div className="submitEditWrap">
                <button className="submitEdit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default EditUser;
