import React from 'react';
import { Link } from 'react-router-dom';
import { selectAllImages } from '../../../reducers/selectors';
import PhotoDetailContainer from '../photos/photo_detail_container';

class User extends React.Component {
  constructor(props) {
    super(props);

    // this.fetchUser = this.fetchUser.bind(this);
    this.isCurrentUser = this.isCurrentUser.bind(this);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.match.params.id);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.id !== nextProps.match.params.id) {
      this.props.fetchUser(nextProps.match.params.id);
    }
  }

  isCurrentUser () {
    //debugger
    if(this.props.currentUser.id === this.props.user.id) {
      return (<button className="edit-profile">Edit Profile</button>);
    } else {
      if (this.props.user.followers) {
        // this.props.currentUser.id === this.props.user.followers.51.id
        if (Object.keys(this.props.user.followers).includes(this.props.currentUser.id.toString())) {
          return (<button className="following-button" onClick={() => this.props.deleteFollow(this.props.user.id).then(() => this.props.fetchUser(this.props.user.username))}>Following</button>);
        }
      }

      return (<button className="follow-button" onClick={() => this.props.addFollow(this.props.user.id).then(() => this.props.fetchUser(this.props.user.username))}>Follow</button>);

    }
  }

  render() {

    const photos = selectAllImages(this.props.images);
    let allUserPhotos;

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
                    {this.isCurrentUser()}
                  </div>
                </div>
                <div className="second">
                  <div className="user-stats">
                    <div><span className="number-posts">{allUserPhotos.length}</span> posts</div>
                    <div><span className="number-follow">{this.props.user.followers_count}</span> followers</div>
                    <div><span className="number-follow">{this.props.user.followees_count}</span> following</div>
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
