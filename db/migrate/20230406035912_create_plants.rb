class CreatePlants < ActiveRecord::Migration[7.0]
  def change
    create_table :plants do |t|
      t.string :name
      t.string :image
      t.string :light
      t.string :water
      t.string :size
      t.string :description
      t.boolean :safe_for_pets

      t.timestamps
    end
  end
end
