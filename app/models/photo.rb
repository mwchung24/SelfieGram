# == Schema Information
#
# Table name: photos
#
#  id         :integer          not null, primary key
#  caption    :string           default("")
#  user_id    :integer          not null
#  created_at :datetime
#  updated_at :datetime
#

class Photo < ActiveRecord::Base
  validates :user, presence: true

  belongs_to :user

  has_attached_file :image, default_url: "images.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/
  # validates_attachment_presence :photo
end
