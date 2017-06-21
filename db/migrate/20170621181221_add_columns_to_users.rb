class AddColumnsToUsers < ActiveRecord::Migration
  def change
    add_column :users, :name, :string, default: ''
    add_column :users, :bio, :text, default: ''
    add_index :users, :username
    add_column :users, :profile_pic, :string
    add_column :users, :profile_pic_content_type, :string
    add_column :users, :profile_pic_file_size, :string
    add_column :users, :profile_pic_updated_at, :datetime
  end
end
