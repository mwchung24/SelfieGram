import React from 'react';
import { selectAllFollows } from '../../../reducers/selectors';
import { Link } from 'react-router-dom';

class Followee extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const followees = selectAllFollows(this.props.user.followees);
    let UserFollowees;
    if (followees) {
      UserFollowees = followees.map( (followee) => {

        const followRender = () => {
          if(followee) {
            if(Object.keys(this.props.user.followees).includes(followee.id.toString())) {
              return (<button className="following-button following-on-follow" onClick={() => this.props.deleteFollow(followee.id).then(() => this.props.fetchUser(this.props.user.username))}>Following</button>);
            }
            return (<button className="follow-button follow-on-follow" onClick={() => this.props.addFollow(followee.id).then(() => this.props.fetchUser(this.props.user.username))}>Follow</button>);
          }
        };

        return (
          <li key={followee.id}>
            <div className="FollowModalBody">
              <div className="AFollow">
                <div className="followUser">
                  <Link to={`${followee.username}`} onClick={() => this.props.closeModal()}>
                    <img className="profile-pic edit-profile-pic" src={followee.photo_url}/>
                  </Link>
                  <div className="followNames">
                    <Link className="followUsernameLink" to={`${followee.username}`} onClick={() => this.props.closeModal()}>
                      <div className="followUsername">{followee.username}</div>
                    </Link>
                    <div className="followName">{followee.name}</div>
                  </div>
                </div>
                {followRender()}
              </div>
            </div>
          </li>
        );
      });
    }
    return (
      <section className="FollowModal" onClick={(e) => e.stopPropagation()}>
        <div className="FollowHeading">Following</div>
        <ul>
          {UserFollowees}
        </ul>
      </section>

    );
  }
}

export default Followee;
