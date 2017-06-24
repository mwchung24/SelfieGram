# debugger
json.id photo.id
json.user_id photo.user.id
json.username photo.user.username
json.profile_pic asset_path(photo.user.photo.url)
json.images_url asset_path(photo.image.url)
json.caption photo.caption
json.createdAt photo.created_at
# json.uploadedAt uploaded_at.gsub(/about/, '').concat(' ago')
