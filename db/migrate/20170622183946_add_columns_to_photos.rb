class AddColumnsToPhotos < ActiveRecord::Migration
  def change
    add_column :photos, :caption, :string, default: ""
    add_column :photos, :user_id, :integer, null: false
    add_column :photos, :timestamps, :datetime, null: false
  end
end
