json.array! (@users) do |user|
  json.username user.username
  json.name user.name
  json.id user.id
  json.photo_url asset_path(user.photo.url)
end
