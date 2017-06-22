import React from 'react';
import { Link } from 'react-router-dom';

class User extends React.Component {
  constructor(props) {
    super(props);

    // this.fetchUser = this.fetchUser.bind(this);

  }

  componentDidMount() {
    this.props.fetchUser(this.props.match.params.id);
  }

  renderPhoto() {
    if (this.props.images[0]) {
      return (<div>{this.props.images[0].images_url}</div>);
    } else {
      return (<div> </div>);
    }
  }

  render() {
    debugger
    return (
      <section className="user-profile">
        <div className="main-profile">
          <section className="user-info">
            <div className="profile-pic-div">
              <img className="profile-pic" src={this.props.user.photo_url}/>
            </div>
            <div className="user-info-top">
              <div className="first">
                <div className="profile-username">{this.props.user.username}</div>
                <div>
                  <button className="edit-profile">Edit Profile</button>
                </div>
              </div>
              <div className="second">
                <div className="user-stats">
                  <div><span className="number-posts">#</span> posts</div>
                  <div><span className="number-follow">#</span> followers</div>
                  <div><span className="number-follow">#</span> following</div>
                </div>
              </div>
              <div className="third">
                <div className="profile-name">{this.props.user.name}</div>
                <div className="profile-bio">{this.props.user.bio}</div>
              </div>
            </div>
          </section>
        </div>
        <div>{this.renderPhoto()}</div>
      </section>
    );
  }
}
// <div>
//   <button className="logoutButton" onClick={logout}><img className="logoutIcon" src={ window.images.logout } /></button>
// </div>

export default User;
