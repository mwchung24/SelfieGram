import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { selectAllImages } from '../../../reducers/selectors';
import PhotoDetailContainer from '../photos/photo_detail_container';
import EditProfilePicContainer from './edit_profile_pic_container';
import FollowerContainer from '../follow/follower_container';
import FolloweeContainer from '../follow/followee_container';

class User extends React.Component {
  constructor(props) {
    super(props);

    this.isCurrentUser = this.isCurrentUser.bind(this);
    this.isCurrentUserProfilePic = this.isCurrentUserProfilePic.bind(this);
    this.userPhotos = this.userPhotos.bind(this);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.match.params.id);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.id !== nextProps.match.params.id) {
      this.props.fetchUser(nextProps.match.params.id);
    }
  }

  isCurrentUserProfilePic () {
    if(this.props.currentUserId === this.props.user.id) {
      return (
        <button className="profile-pic-div" onClick={() => this.props.openModal(<EditProfilePicContainer />)}>
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

  isCurrentUser () {
    if(this.props.currentUserId === this.props.user.id) {
      return (<Link className="edit-profile" to={`/users/${this.props.currentUsername}/edit`}>Edit Profile</Link>);
    } else {
      if (this.props.user.followers) {
        if (Object.keys(this.props.user.followers).includes(this.props.currentUserId.toString())) {
          return (<button className="following-button" onClick={() => this.props.deleteFollow(this.props.user.id).then(() => this.props.fetchUser(this.props.user.username))}>Following</button>);
        }
      }
      return (<button className="follow-button" onClick={() => this.props.addFollow(this.props.user.id).then(() => this.props.fetchUser(this.props.user.username))}>Follow</button>);
    }
  }

  userPhotos(photo) {
    return (
      <li key={photo.id} className='userPhotoItem'>
        <div className="hover-images">
          <div className="likes-and-comments">
            <div className="likes-and-count">
              <div><i className="fa fa-heart hover-heart" aria-hidden="true"></i></div>
              <div className="hover-heart-count">{photo.like_count}</div>
            </div>
            <div className="comments-and-count">
              <div><i className="fa fa-comment hover-comment" aria-hidden="true"></i></div>
              <div className="hover-comment-count">{photo.comment_count}</div>
            </div>
          </div>
        </div>
        <img className='photoItem' src={photo.images_url} onClick={() => this.props.openModal(<PhotoDetailContainer id={photo.id}/>)} />
      </li>
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
        return this.userPhotos(photo);
      });
    }

    return (
      <section>
        <div className="user-profile">
          <div className="main-profile">
            <section className="user-info">
              <div>
                {this.isCurrentUserProfilePic()}
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
                    <div className="number-of-posts"><span className="number-posts">{allUserPhotos.length}</span> posts</div>
                    <div>
                      <button className="followButton" onClick={() => this.props.openModal(<FollowerContainer />)}>
                        <span
                          className="number-follow"
                          >
                          {this.props.user.followers_count}
                        </span> followers
                      </button>
                    </div>
                    <div>
                      <button className="followButton" onClick={() => this.props.openModal(<FolloweeContainer />)}>
                        <span
                          className="number-follow"
                          >
                          {this.props.user.followees_count}
                        </span> following
                      </button>
                    </div>
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

export default User;
