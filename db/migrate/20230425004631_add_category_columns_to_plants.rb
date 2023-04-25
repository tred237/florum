class AddCategoryColumnsToPlants < ActiveRecord::Migration[7.0]
  def change
    add_column :plants, :edible, :boolean
    add_column :plants, :blooms, :boolean
    add_column :plants, :climate, :string
  end
end
