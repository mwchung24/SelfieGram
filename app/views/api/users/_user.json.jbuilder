json.extract! user, :id, :username, :name
json.photo_url asset_path(user.photo.url)
