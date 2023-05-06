class UserSerializer < ActiveModel::Serializer
  attributes :id, :username

  has_many :plants, through: :forum_entries, key: :commented_plants do
    object.plants.uniq
  end

  has_many :owned_plants, foreign_key: "owner_id", class_name: "Plant" do
    object.owned_plants.order("lower(name)")
  end
end
