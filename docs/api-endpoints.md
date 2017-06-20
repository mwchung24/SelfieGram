# API Endpoints

## HTML API

### Root
| Method | URI | Description |
| --- | --- | --- |
| `GET` | `/` | Loads React web app |

## JSON API

### User
| Method | URI | Description |
| --- | --- | --- |
| `GET` | `/api/users` | Get all users |
| `POST` | `/api/users` | Create new user |
| `GET` | `/api/users/:id` | Get user by username or id |
| `PATCH` | `/api/users/:id` | Edit user |
| `GET` | `/api/users/search` | Get user by search |

### Session
| Method | URI | Description |
| --- | --- | --- |
| `POST` | `/api/session` | Sign In |
| `DELETE` | `/api/session` | Sign Out |

### Photos
| Method | URI | Description |
| --- | --- | --- |
| `GET` | `/api/photos` | Get all photos |
| `POST` | `/api/photos` | Upload photo |
| `GET` | `/api/photos/:id` | Get photo by id |
| `DELETE` | `/api/photos/:id` | Delete photo |
| `GET` | `/api/users/:user_id/photos` | Get all the user's photos |
| `GET` | `/api/users/:user_id/following/photos` | Get all photos of a user's following (Photo Feed) |

### Likes
| Method | URI | Description |
| --- | --- | --- |
| `POST` | `/api/photos/:photo_id/likes` | Like a photo |
| `DELETE` | `/api/photos/:photo_id/likes` | Unlike a photo |

### Comments
| Method | URI | Description |
| --- | --- | --- |
| `POST` | `/api/comments` | Post/Create a comment |
| `DELETE` | `/api/comments/:id` | Delete a comment |

### Follows
| Method | URI | Description |
| --- | --- | --- |
| `GET` | `/api/users/:user_id/following` | Get all followings of a user |
| `GET` | `/api/users/:user_id/followers` | Get all followers of a user |
| `POST` | `/api/users/:user_id/follows` | Follow a user |
| `DELETE` | `/api/users/:user_id/follows` | Unfollow a user |
