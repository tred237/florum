class ForumEntrySerializer < ActiveModel::Serializer
  attributes :id, :entry

  belongs_to :user
  belongs_to :plant
end
