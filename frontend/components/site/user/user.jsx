import React from 'react';
import { Link } from 'react-router-dom';
import { selectAllImages } from '../../../reducers/selectors';
import PhotoDetailContainer from '../photos/photo_detail_container';

class User extends React.Component {
  constructor(props) {
    super(props);

    // this.fetchUser = this.fetchUser.bind(this);

  }

  componentDidMount() {
    this.props.fetchUser(this.props.match.params.id);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.id !== nextProps.match.params.id) {
      this.props.fetchUser(nextProps.match.params.id);
    }
  }

  // renderPhoto() {
  //   if (this.props.images[0]) {
  //     for (var i = 0; i < this.props.images.length; i++) {
  //       //debugger
  //       return (<div><img src={this.props.images[i]selectAllImages .images_url}/></div>);
  //     }
  //   } else {
  //     return (<div> </div>);
  //   }
  // }

  render() {

    const photos = selectAllImages(this.props.images);
    let allUserPhotos;

    // //debugger

    if (photos) {
      allUserPhotos = photos.map( (photo) => {
        return (
          <li key={photo.id} className='userPhotoItem'>
            <img className='photoItem' src={photo.images_url} onClick={() => this.props.openModal(<PhotoDetailContainer id={photo.id}/>)} />
          </li>
        );
      });
    }

    return (
      <section>
        <div className="user-profile">
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
        </div>
        <div className="userPhotoIndex">
          <ul className="userPhotos">
            {allUserPhotos}
          </ul>
        </div>
      </section>
    );
  }
}
// <div>
//   <button className="logoutButton" onClick={logout}><img className="logoutIcon" src={ window.images.logout } /></button>
// </div>

export default User;
