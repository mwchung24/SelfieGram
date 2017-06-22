# == Schema Information
#
# Table name: users
#
#  id                       :integer          not null, primary key
#  username                 :string           not null
#  password_digest          :string           not null
#  session_token            :string           not null
#  created_at               :datetime
#  updated_at               :datetime
#  name                     :string           default("")
#  bio                      :text             default("")
#  profile_pic              :string
#  profile_pic_content_type :string
#  profile_pic_file_size    :string
#  profile_pic_updated_at   :datetime
#

class User < ActiveRecord::Base
  validates :username, :password_digest, :session_token, presence: true
  validates :username, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }
  after_initialize :ensure_session_token

  has_attached_file :photo, default_url: "default_profile.png"
  validates_attachment_content_type :photo, content_type: /\Aimage\/.*\z/

  attr_reader :password

  def self.find_by_credentials(username, password)
    user = User.find_by_username(username)
    if user && user.is_password?(password)
      user
    else
      nil
    end
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end

  private

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end

end
