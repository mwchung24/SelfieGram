# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.destroy_all
Photo.destroy_all

user1 = User.create({name: "Martin", bio: "I love taking selfies!", username: "martin123", password: "martin123", photo: "https://s3.us-east-2.amazonaws.com/selfiegram-dev/users/photos/000/000/002/original/IMG_8232.jpg"})
user2 = User.create({name: "Hanna", bio: "SelfieGram is the best!", username: "hanna123", password: "hanna123", photo: File.open("app/assets/images/default_profile.png")})
user3 = User.create({name: "Taki", bio: "I love myself", username: "takitaki", password: "takitaki", photo: File.open("app/assets/images/default_profile.png")})
# user4 = User.create({name: "Wada", bio: "SelfieGrammmmm", username: "wada321", password: "wada321", photo: File.open("app/assets/images/default_profile.png")})

Photo.create({image: File.open("app/assets/images/images.png"), user_id: user1.id, caption: 'testing pictures1'})
Photo.create({image: File.open("app/assets/images/images.png"), user_id: user1.id, caption: 'testing pictures2'})
Photo.create({image: File.open("app/assets/images/images.png"), user_id: user1.id, caption: 'testing pictures3'})
# Photo.create({photo: File.open("app/assets/images/images.png"), user_id: user2.id, caption: 'testing pictures4'})
# Photo.create({photo: File.open("app/assets/images/images.png"), user_id: user2.id, caption: 'testing pictures5'})
# Photo.create({photo: File.open("app/assets/images/images.png"), user_id: user2.id, caption: 'testing pictures6'})
# Photo.create({photo: File.open("app/assets/images/images.png"), user_id: user2.id, caption: 'testing pictures7'})
# Photo.create({photo: File.open("app/assets/images/images.png"), user_id: user3.id, caption: 'testing pictures8'})
