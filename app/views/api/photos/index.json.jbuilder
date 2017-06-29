json.array! @photos do |photo|
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

  json.daysAgo time_ago_in_words(photo.created_at)

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
      end
    end
  end
end
