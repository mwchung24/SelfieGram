require 'time_ago_in_words'

# upload_at = (photo.created_at, Time.now)
# upload_at = (photo.created_at, Time.now)
json.id photo.id
json.user_id photo.user.id
json.username photo.user.username
json.profile_pic asset_path(photo.user.photo.url)
json.images_url asset_path(photo.image.url)
json.caption photo.caption
json.createdAtMonth photo.created_at.month
json.createdAtDay photo.created_at.day
json.createdAtYear photo.created_at.year
json.like_count photo.likes.count
json.liked photo.current_user_liked(current_user)
json.like_id photo.current_user_like_id(current_user)
json.comment_id photo.current_user_comment_id(current_user)

json.likes do
  photo.likes.each do |like|
    json.set! like.id do
      json.id like.id
      json.photo_id like.photo.id
    end
  end
end

json.comments do
  photo.comments.each do |comment|
    json.set! comment.id do
      json.id comment.id
      json.photo_id comment.photo.id
      json.body comment.body
      json.username comment.user.username
    end
  end
end
# json.uploadedAt uploaded_at
# json.uploadedAt uploaded_at.ago_in_words
# json.uploadedAt uploaded_at.gsub(/about/, '').concat(' ago')
