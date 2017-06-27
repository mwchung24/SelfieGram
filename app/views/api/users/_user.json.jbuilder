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

json.followers_count user.followers.count
json.followees_count user.followees.count
json.followers do
  user.followers.each do |follower|
    json.set! follower.id do
      json.id follower.id
      json.username follower.username
      json.photo_url asset_path(user.photo.url)
    end
  end
end

json.followees do
  user.followees.each do |followee|
    json.set! followee.id do
      json.id followee.id
      json.username followee.username
      json.photo_url asset_path(user.photo.url)
    end
  end
end
# json.visitor_follows user.current_user_follows(current_user)
# json.visitor_id user.current_user_follow_id(current_user)
