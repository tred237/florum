class AddUserIdToPlants < ActiveRecord::Migration[7.0]
  def change
    add_column :plants, :owner_id, :integer
  end
end
