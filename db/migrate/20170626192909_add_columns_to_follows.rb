class AddColumnsToFollows < ActiveRecord::Migration
  def change
    add_column :follows, :follower_id, :integer, null: false
    add_column :follows, :followee_id, :integer, null: false
    add_column :follows, :timestamps, :datetime, null: false
  end
end
