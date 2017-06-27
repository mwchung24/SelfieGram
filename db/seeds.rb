# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.destroy_all
Photo.destroy_all
Follow.destroy_all

user1 = User.create({name: "Martin", bio: "I love taking selfies!", username: "martin123", password: "martin123", photo: "https://s3.us-east-2.amazonaws.com/selfiegram-dev/users/photos/000/000/002/original/IMG_8232.jpg"})
user2 = User.create({name: "Hanna", bio: "SelfieGram is the best!", username: "hanna123", password: "hanna123", photo: "https://s3.us-east-2.amazonaws.com/selfiegram-dev/users/photos/000/000/002/original/IMG_5384.jpg"})
user3 = User.create({name: "Taki", bio: "I love myself", username: "takitaki", password: "takitaki", photo: "https://s3.us-east-2.amazonaws.com/selfiegram-dev/users/photos/000/000/002/original/taki300.jpg"})
user4 = User.create({name: "Wada", bio: "SelfieGrammmmm", username: "wada321", password: "wada321", photo: "https://s3.us-east-2.amazonaws.com/selfiegram-dev/users/photos/000/000/002/original/wada400.jpg"})

Photo.create({image: "https://s3.us-east-2.amazonaws.com/selfiegram-dev/users/photos/000/000/002/original/IMG_0917.JPG", user_id: user1.id, caption: 'Yay'})
Photo.create({image: "https://s3.us-east-2.amazonaws.com/selfiegram-dev/users/photos/000/000/002/original/IMG_1334.JPG", user_id: user1.id, caption: 'testing pictures2'})
Photo.create({image: "https://s3.us-east-2.amazonaws.com/selfiegram-dev/users/photos/000/000/002/original/IMG_0342.JPG", user_id: user1.id, caption: 'testing pictures3'})
Photo.create({image: "https://s3.us-east-2.amazonaws.com/selfiegram-dev/users/photos/000/000/002/original/martin20.jpg", user_id: user1.id, caption: 'testing pictures3'})
Photo.create({image: "https://s3.us-east-2.amazonaws.com/selfiegram-dev/users/photos/000/000/002/original/IMG_0006.JPG", user_id: user1.id, caption: 'testing pictures3'})
Photo.create({image: "https://s3.us-east-2.amazonaws.com/selfiegram-dev/users/photos/000/000/002/original/martin30.JPG", user_id: user1.id, caption: 'testing pictures3'})
Photo.create({image: "https://s3.us-east-2.amazonaws.com/selfiegram-dev/users/photos/000/000/002/original/martin40.jpg", user_id: user1.id, caption: 'testing pictures3'})
Photo.create({image: "https://s3.us-east-2.amazonaws.com/selfiegram-dev/users/photos/000/000/002/original/IMG_8155.jpg", user_id: user2.id, caption: 'testing pictures4'})
Photo.create({image: "https://s3.us-east-2.amazonaws.com/selfiegram-dev/users/photos/000/000/002/original/IMG_8137.jpg", user_id: user2.id, caption: 'testing pictures5'})
Photo.create({image: "https://s3.us-east-2.amazonaws.com/selfiegram-dev/users/photos/000/000/002/original/IMG_6693.jpg", user_id: user2.id, caption: 'testing pictures6'})
# Photo.create({image: "https://s3.us-east-2.amazonaws.com/selfiegram-dev/users/photos/000/000/002/original/IMG_5384.jpg", user_id: user2.id, caption: 'testing pictures7'})
Photo.create({image: "https://s3.us-east-2.amazonaws.com/selfiegram-dev/users/photos/000/000/002/original/IMG_5792.jpg", user_id: user2.id, caption: 'testing pictures8'})
Photo.create({image: "https://s3.us-east-2.amazonaws.com/selfiegram-dev/users/photos/000/000/002/original/IMG_7361.jpg", user_id: user2.id, caption: 'testing pictures8'})
Photo.create({image: "https://s3.us-east-2.amazonaws.com/selfiegram-dev/users/photos/000/000/002/original/IMG_7282.jpg", user_id: user2.id, caption: 'testing pictures8'})
Photo.create({image: "https://s3.us-east-2.amazonaws.com/selfiegram-dev/users/photos/000/000/002/original/IMG_7720.jpg", user_id: user2.id, caption: 'testing pictures8'})
Photo.create({image: "https://s3.us-east-2.amazonaws.com/selfiegram-dev/users/photos/000/000/002/original/IMG_7019.jpg", user_id: user2.id, caption: 'testing pictures8'})
Photo.create({image: "https://s3.us-east-2.amazonaws.com/selfiegram-dev/users/photos/000/000/002/original/IMG_5793.jpg", user_id: user2.id, caption: 'testing pictures8'})
Photo.create({image: "https://s3.us-east-2.amazonaws.com/selfiegram-dev/users/photos/000/000/002/original/hanna1.jpg", user_id: user2.id, caption: 'testing pictures8'})
Photo.create({image: "https://s3.us-east-2.amazonaws.com/selfiegram-dev/users/photos/000/000/002/original/taki100.jpg", user_id: user3.id, caption: 'testing pictures8'})
Photo.create({image: "https://s3.us-east-2.amazonaws.com/selfiegram-dev/users/photos/000/000/002/original/taki200.jpg", user_id: user3.id, caption: 'testing pictures8'})
Photo.create({image: "https://s3.us-east-2.amazonaws.com/selfiegram-dev/users/photos/000/000/002/original/wada500.jpg", user_id: user4.id, caption: 'testing pictures8'})
# Photo.create({image: "https://s3.us-east-2.amazonaws.com/selfiegram-dev/users/photos/000/000/002/original/wada12.jpg", user_id: user4.id, caption: 'testing pictures8'})
Photo.create({image: "https://s3.us-east-2.amazonaws.com/selfiegram-dev/users/photos/000/000/002/original/wada300.jpg", user_id: user4.id, caption: 'testing pictures8'})
Photo.create({image: "https://s3.us-east-2.amazonaws.com/selfiegram-dev/users/photos/000/000/002/original/taki100.jpg", user_id: user4.id, caption: 'testing pictures8'})

Follow.create({follower_id: user1.id, followee_id: user2.id})
Follow.create({follower_id: user1.id, followee_id: user3.id})
Follow.create({follower_id: user1.id, followee_id: user4.id})
Follow.create({follower_id: user2.id, followee_id: user1.id})
Follow.create({follower_id: user2.id, followee_id: user3.id})
Follow.create({follower_id: user2.id, followee_id: user4.id})
Follow.create({follower_id: user3.id, followee_id: user1.id})
Follow.create({follower_id: user3.id, followee_id: user2.id})
Follow.create({follower_id: user3.id, followee_id: user4.id})
Follow.create({follower_id: user4.id, followee_id: user1.id})
Follow.create({follower_id: user4.id, followee_id: user2.id})
Follow.create({follower_id: user4.id, followee_id: user3.id})
