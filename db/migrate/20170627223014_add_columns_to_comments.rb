class AddColumnsToComments < ActiveRecord::Migration
  def change
    add_column :comments, :user_id, :integer, null: false
    add_column :comments, :photo_id, :integer, null: false
    add_column :comments, :body, :string, null: false
    add_timestamps(:comments)
  end
end
