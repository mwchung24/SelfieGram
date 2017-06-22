# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

user1 = User.create({username: "martin123", password: "martin123"})
user2 = User.create({username: "hanna123", password: "hanna123"})
user3 = User.create({username: "takitaki", password: "takitaki"})

Photo.create({user_id: user1.id, caption: 'testing pictures1'})
Photo.create({user_id: user1.id, caption: 'testing pictures2'})
Photo.create({photo: File.open("app/assets/images/images.png"), user_id: user1.id, caption: 'testing pictures3'})
# Photo.create({photo: File.open("app/assets/images/images.png"), user_id: user2.id, caption: 'testing pictures4'})
# Photo.create({photo: File.open("app/assets/images/images.png"), user_id: user2.id, caption: 'testing pictures5'})
# Photo.create({photo: File.open("app/assets/images/images.png"), user_id: user2.id, caption: 'testing pictures6'})
# Photo.create({photo: File.open("app/assets/images/images.png"), user_id: user2.id, caption: 'testing pictures7'})
# Photo.create({photo: File.open("app/assets/images/images.png"), user_id: user3.id, caption: 'testing pictures8'})
