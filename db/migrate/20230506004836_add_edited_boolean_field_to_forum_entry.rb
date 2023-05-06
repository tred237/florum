class AddEditedBooleanFieldToForumEntry < ActiveRecord::Migration[7.0]
  def change
    add_column :forum_entries, :edited, :boolean, default: false
  end
end
