require 'time_ago_in_words'
# //debugger
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
# json.uploadedAt uploaded_at
# json.uploadedAt uploaded_at.ago_in_words
# json.uploadedAt uploaded_at.gsub(/about/, '').concat(' ago')
