json.extract! user, :id, :username, :name, :bio
json.photo_url asset_path(user.photo.url)
