json.extract! user, :id, :username, :name, :bio
json.photo_url asset_path(user.photo.url)

json.images({})
json.images do
  user.photos.each do |photo|
    json.set! photo.id do
      json.id photo.id
      json.images_url asset_path(photo.image.url)
      json.createdAt photo.created_at
    end
  end
end
