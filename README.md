# SelfieGram

[SelfieGram][heroku]

[heroku]: https://selfiegram-app.herokuapp.com

SelfieGram is a web application that took inspiration from Instagram.  The site is designed for everyone who uses any form of social media.. because lets be honest, who doesn't enjoy taking selfies?  Users can post selfies and share their photos with their friends!  The full-stack was developed using Ruby on Rails on the backend and React/Redux on the frontend.

## Features

### User Authentication

Users can sign up and log in.  The authentication process uses BCrypt to hash the passwords and ensures user privacy.

![image of log in](docs/images/login.png)

###

## Additional Resources

- [View Wireframes](https://github.com/mwchung24/instagramClone/tree/master/docs/wireframes)
- [React Components](component-hierarchy.md)
- [API Endpoints](api-endpoints.md)
- [DB Schema](schema.md)
- [Sample State](sample-state.md)

## Future Improvements

SelfieGram was designed and built in 10 days and the list below are feature I would like to implement in the future.

### Search

Allow users to search by username or hashtags.

### Infinite Scroll

The app was initially load with 10 photos on the photo feed page and 6 photos on the user show page.  Then when the user scrolls to the bottom of the page more photos will be fetched and rendered.

### Direct Messaging

Give users access to message followers and followees directly and privately through live messaging.

### Hash Tags

Allow users to tag photos with hashtags allowing the hash tags to be searched in the search bar.

### Collapsable Comments

When the number of comments get over 3 comments, the comments would collapse and display the latest 3 comments.  The collapsed section of the comments will have a count of the total number of comments.  More comments can be viewed by clicking the collapsed section.

### Videos

Allow users to upload not only photos but also videos.
