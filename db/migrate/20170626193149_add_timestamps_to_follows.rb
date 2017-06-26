class AddTimestampsToFollows < ActiveRecord::Migration
  def change
    add_timestamps(:follows)

    remove_column :follows, :timestamps
  end
end
