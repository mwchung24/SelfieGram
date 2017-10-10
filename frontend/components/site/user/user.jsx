import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { selectAllImages } from '../../../reducers/selectors';
import EditProfilePicContainer from './edit_profile_pic_container';
import UserInfoOne from './user_info_one';
import UserInfoTwo from './user_info_two';
import UserPhotos from './user_photos';

class User extends React.Component {
  constructor(props) {
    super(props);

    this.isCurrentUserProfilePic = this.isCurrentUserProfilePic.bind(this);
    this.userProfile = this.userProfile.bind(this);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.match.params.id);
  }

  componentWillUnmount() {
    this.props.deleteUser();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.id !== nextProps.match.params.id) {
      this.props.fetchUser(nextProps.match.params.id);
    }
  }

  isCurrentUserProfilePic () {
    if(this.props.currentUserId === this.props.user.id) {
      return (
        <button className="profile-pic-div current-user-profile" onClick={() => this.props.openModal(<EditProfilePicContainer />)}>
          <img className="profile-pic" src={this.props.user.photo_url}/>
        </button>
      );
    } else {
      return (
        <div className="profile-pic-div">
          <img className="profile-pic" src={this.props.user.photo_url}/>
        </div>
      );
    }
  }

  userProfile(allUserPhotos) {
    return (
      <section>
        <div className="user-profile">
          <div className="main-profile">
            <section className="user-info">
              <div>
                {this.isCurrentUserProfilePic()}
              </div>
              <div className="user-info-top">
                <UserInfoOne
                  user={this.props.user}
                  currentUserId={this.props.currentUserId}
                  currentUsername={this.props.currentUsername}
                  deleteFollow={this.props.deleteFollow}
                  addFollow={this.props.addFollow}
                  fetchUser={this.props.fetchUser}
                />
                <UserInfoTwo
                  allUserPhotos={allUserPhotos}
                  openModal={this.props.openModal}
                  user={this.props.user}
                />
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

  render() {
    const photos = selectAllImages(this.props.images);
    let allUserPhotos;

    if (this.props.user.photos_count !== 0) {
      if (photos.length === 0) {
        return(
          <div className="progress-bar"></div>
        );
      }
    }

    if (photos) {
      allUserPhotos = photos.map( (photo) => {
        return (
          <UserPhotos
            key={photo.id}
            photo={photo}
            openModal={this.props.openModal}
          />
        );
      });
    }

    return this.userProfile(allUserPhotos);
  }
}

export default User;
