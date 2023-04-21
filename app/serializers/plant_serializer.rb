class PlantSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :light, :water, :size, :description, :safe_for_pets

  has_many :forum_entries do
    object.forum_entries.order(created_at: :desc)
  end
  belongs_to :owner, foreign_key: :owner_id, class_name: 'User'
end
