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
  has_many :likes, dependent: :destroy
  has_many :comments, dependent: :destroy

  has_attached_file :image, default_url: "images.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/
  validates_with AttachmentSizeValidator, attributes: :image, less_than: 5.megabytes

  def current_user_liked(current_user)
    liked = false
    self.likes.each do |like|
      if(like.user_id == current_user.id)
        liked = true
      end
    end
    return liked
  end

  def current_user_like_id(current_user)
    id = nil
    self.likes.each do |like|
      if(like.user_id == current_user.id)
        id = like.id
      end
    end
    return id
  end

  def current_user_comment_id(current_user)
    id = nil
    self.comments.each do |comment|
      if (comment.user_id == current_user.id)
        id = comment.id
      end
    end
    return id
  end
end
