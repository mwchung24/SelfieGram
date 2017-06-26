# == Schema Information
#
# Table name: follows
#
#  id          :integer          not null, primary key
#  follower_id :integer          not null
#  followee_id :integer          not null
#  created_at  :datetime
#  updated_at  :datetime
#

class Follow < ActiveRecord::Base

  belongs_to :follower,
  class_name: :User,
  primary_key: :id,
  foreign_key: :follower_id

  belongs_to :following,
  class_name: :User,
  primary_key: :id,
  foreign_key: :followee_id
end
