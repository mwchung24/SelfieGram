# == Schema Information
#
# Table name: photos
#
#  id                 :integer          not null, primary key
#  caption            :string           default("")
#  user_id            :integer          not null
#  created_at         :datetime
#  updated_at         :datetime
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#

class Photo < ActiveRecord::Base
  validates :user, presence: true

  belongs_to :user

  has_attached_file :image, default_url: "images.png"
  # styles: { large: "600x", medium: "300x300#" }
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/
  # validates_attachment_presence :photo
end
