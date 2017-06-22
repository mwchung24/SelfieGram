class RemoveColumnsUsers < ActiveRecord::Migration
  def change
    remove_column :users, :profile_pic
    remove_column :users, :profile_pic_content_type
    remove_column :users, :profile_pic_file_size
    remove_column :users, :profile_pic_updated_at
  end
end
