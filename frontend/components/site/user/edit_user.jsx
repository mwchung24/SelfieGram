import React from 'react';

class EditUser extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      name: "",
      bio: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount () {
    this.props.fetchUser(this.props.match.params.id)
    .then(() => {
      this.setState ({
        id: `${this.props.user.id}`,
        username: `${this.props.user.username}`,
        name: `${this.props.user.name}`,
        bio: `${this.props.user.bio}`,
      });
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.updateUser(user)
    .then ( () => this.props.history.push(`/users/${this.props.user.username}`));
  }

  update(field) {
    return e => {
      this.setState({[field]: e.currentTarget.value});
    };
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
            <form className="formInputFields" onSubmit={this.handleSubmit}>
              <div className="editName">
                <div>Name</div>
                <input value={this.state.name} onChange={this.update("name")}></input>
              </div>
              <div className="editUsername">
                <div>Username</div>
                <input value={this.state.username} onChange={this.update("username")}></input>
              </div>
              <div className="editBio">
                <div>Bio</div>
                <textarea value={this.state.bio} onChange={this.update("bio")}></textarea>
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
