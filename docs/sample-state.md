# Sample State

```js
{
  session: {
    currentUser: {
      id: 1,
      username: "martin"
    },
    errors: []
  },
  photos: {
    3: {
      id: 3,
      username: "martin",
      avatar: "martin_pic.png",
      url: "hanna_selfie.png",
      caption: "Smile, it's selfie time!",
      createdAt: "2017-06-08T11:59:59:00",
      uploadedAt: "10 days ago",
      likesCount: 2,
      currentUserLiked: false,
      commentsCount: 2,
      comments: {
        4: {
          id: 4,
          username: "taki",
          body: "Oh yes it is!",
          createdAt: "2017-05-08T11:59:59:00"
        },
        5: {
          id: 5,
          username: "kingsley",
          body: "Its always selfie time!",
          createdAt: "2017-05-09T11:59:59:00"
        }
      }
    },
    2: {
      id: 2,
      username: "calvin",
      avatar: "calvin_pic.png",
      url: "calvin_selfie.png",
      caption: "I love my pearly whites",
      createdAt: "2017-06-10T10:30:05-07:00",
      uploadedAt: "12 days ago",
      likesCount: 3,
      currentUserLiked: true,
      commentsCount: 1,
      comments: {
        3: {
          id: 3,
          username: "martin",
          body: "I love this photo.",
          createdAt: "2017-05-06T11:59:59:00"
        }
      }
    }
  },
  user: {
    id: 1,
    username: "martin",
    name: "Martin",
    bio: "I am a professional photographer",
    avatar: "martin_pic.png",
    followersCount: 3,
    followers: {
      2: {
        id: 2,
        username: 'hanna',
        name: 'Hanna',
        avatar: 'hanna_pic.png',
        currentUserFollowed: true,
        createdAt: "2017-05-04T11:59:59:00"
      },
      3: {
        id: 3,
        username: 'calvin',
        name: 'Calvin',
        avatar: 'calvin_pic.png',
        currentUserFollowed: true,
        createdAt: "2017-05-01T11:59:59:00"
      },
      4: {
        id: 4,
        username: 'taki',
        name: 'Taki',
        avatar: 'taki_pic.png',
        currentUserFollowed: false,
        createdAt: "2017-05-03T11:59:59:00"
      }
    },
    followingsCount: 1,
    following: {
      2: {
        id: 2,
        username: 'hanna',
        name: 'Hanna',
        avatar: 'hanna_pic.png',
        currentUserFollowed: true,
        createdAt: "2017-05-04T11:59:59:00"
      }
    },
    photos: {
      5: {
        id: 5,
        urlMedium: "martin_selfie_2.png",
        createdAt: "2017-05-21T11:59:59:00",
        likesCount: 5,
        commentsCount: 0
      },
      3: {
        id: 3,
        urlMedium: "hanna_selfie.png",
        createdAt: "2017-05-07T11:59:59:00",
        likesCount: 2,
        commentsCount: 2
      },
      1: {
        id: 1,
        urlMedium: "martin_selfie.png",
        createdAt: "2017-05-01T11:59:59:00",
        likesCount: 2,
        commentsCount: 2
      }
    }
  },
  photoDetail: {
    id: 1,
    username: "martin",
    avatar: "martin_pic.png",
    url: "martin_selfie.png",
    urlMedium: "100/100/martin_selfie.png",
    caption: "I love taking selfies",
    createdAt: "2017-06-18T09:00:00-07:00",
    uploadedAt: "2 days ago",
    likesCount: 3,
    currentUserLiked: true,
    commentsCount: 2,
    comments: {
      1: {
        id: 1,
        username: "hanna",
        body: "That's a good selfie!",
        createdAt: "2017-06-18T09:00:00-07:00"
      },
      2: {
        id: 2,
        username: "kingsley",
        body: "check out my selfie, it's better",
        createdAt: "2017-06-19T09:00:00-07:00"
      }
    }
  },
  errors: {
    photoUpload: [],
    avatarUpload: [],
    accountEdit: ["Username can't be blank"],
    accountPassword: []
  },
  loading: false,
  search: {
    1: {
      id: 1,
      username: "martin",
      usernameShort: "martin",
      name: "Martin",
      avatar: "martin_pic.png"
    },
    2: {
      id: 2,
      username: "hanna",
      usernameShort: "hanna",
      name: "Hanna",
      avatar: "hanna_pic.png"
    },
    4: {
      id: 4,
      username: "taki",
      usernameShort: "taki",
      name: "Taki",
      avatar: "taki_pic.png"
    }
  },
  users: {
    1: {
      id: 1,
      username: "martin",
      name: "Martin",
      avatar: "martin_pic.png",
      currentUserFollowed: false
    },
    2: {
      id: 2,
      username: 'hanna',
      name: 'Hanna',
      avatar: 'hanna_pic.png',
      currentUserFollowed: false
    },
    3: {
      id: 3,
      username: "calvin",
      name: "calvin",
      avatar: "calvin_pic.png",
      currentUserFollowed: true
    },
    4: {
      id: 4,
      username: "taki",
      name: "Taki",
      avatar: "taki_pic.png",
      currentUserFollowed: false
    },
    5: {
      id: 5,
      username: "kingsley",
      name: "Kingsley",
      avatar: "kingsley_pic.png",
      currentUserFollowed: false
    }
  }
}

```
