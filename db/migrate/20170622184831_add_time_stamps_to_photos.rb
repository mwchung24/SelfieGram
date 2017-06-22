class AddTimeStampsToPhotos < ActiveRecord::Migration
  def change
    add_timestamps(:photos)

    remove_column :photos, :timestamps
  end
end
