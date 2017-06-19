## Component Hierarchy

### AuthFormContainer
- AuthForm

Will allow users to view contents of the app and have administrative control over their profile items when logged in.  If user is not logged in, user will be redirected to the sign in or sign up pages.

### PageContainer
- Infinite Scrolling
- HeaderContainer
  - NavBarContainer
  - SearchContainer
  - Logo and Application Name

The Header Container will house the Logo and Application links that will link the user back to the Photo Feed Page.  The Header Container will also include the SearchContainer and NavBarContainer.  The header will appear on every page when a user is logged in.

### NavBarContainer
- UserDetailContainer
- ModalContainer
- Log out link

The NavBar Container, being a part of the header container will be available to the user on every page.  The NavBar will house the user profile button that will link the user to their profile page.  If current user matches the profile page's user, then administrative access will be granted, giving the user the ability to delete photos, edit profile, etc.  The NavBar will also include the upload photo button which will be part of the modal container.  The modal will appear on top of the current screen and give the user the ability to upload a photo onto their personal profile and onto the Photo Feed.  The log out button will log the user out and redirect the user to the sign in page.

### SignUpContainer
- SignUp

### SignInContainer
- SignIn

### ModalContainer
Renders a modal component on top of the current page.

### PhotoFeedContainer/Home
- PhotoIndexContainer

The Photo Feed Container will be the "index" page for the photos and have photos of all the users sorted by upload time.

### PhotoIndexContainer
- PhotoIndexItem

Will have access to all photos.

### PhotoIndexItem
- UserDetailContainer
  - UserDetail
    - ProfilePic
    - Username
- PhotoDetailContainer
  - PhotoDetail
    - Photo
    - Caption
    - HashTag
    - CommentContainer
      - CommentItem
      - CommentForm
    - LikesContainer
      - LikeItem
    - Num of likes
    - Time

One specific photo, but user and photo detail available for the photo.  User that uploads the photo can delete comments, delete the photo, edit the caption, etc.

### UserProfileContainer
- UserProfileDetailContainer
- UserPhotoContainer
- UserPhotoDetailContainer

### UserProfileDetailContainer
- UserProfileDetail
  - ProfilePic
  - Username
  - Name
  - NumOfPosts
  - Followers(modal)
  - Followings(modal)
  - ProfileDescription
  - EditUserContainer

### EditUserContainer
- EditUser

User has the ability to change the profile picture, username and profile description.

### UserPhotoContainer
- UserPhoto
  - Photo

### UserPhotoDetailContainer
- UserPhotoDetail
  - Caption
  - HashTags
  - CommentContainer
  - LikesContainer
  - Time

### CommentContainer
- CommentItem
  - comment

### LikesContainer
- LikeItem
  - like

## Routes
| Path | Component |
| --- | --- |
| `/sign-up` | `AuthFormContainer` |
| `/sign-in` | `AuthFormContainer` |
| `/` | `PageContainer`, `PhotoFeedContainer` |
| `/:username` | `PageContainer`, `UserProfileContainer` |
| `/:username/edit` | `PageContainer`, `EditUserContainer` |
