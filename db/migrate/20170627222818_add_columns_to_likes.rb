class AddColumnsToLikes < ActiveRecord::Migration
  def change
    add_column :likes, :user_id, :integer, null: false
    add_column :likes, :photo_id, :integer, null: false
    add_timestamps(:likes)
  end
end
