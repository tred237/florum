class ForumEntrySerializer < ActiveModel::Serializer
  attributes :id, :user_id, :plant_id, :entry

  belongs_to :user
  belongs_to :plant
end
