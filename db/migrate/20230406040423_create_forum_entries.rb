class CreateForumEntries < ActiveRecord::Migration[7.0]
  def change
    create_table :forum_entries do |t|
      t.integer :user_id
      t.integer :plant_id
      t.string :entry

      t.timestamps
    end
  end
end
