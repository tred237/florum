class PlantSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :light, :water, :size, :description, :safe_for_pets

  has_many :forum_entries
  has_many :users, through: :forum_entries
end
