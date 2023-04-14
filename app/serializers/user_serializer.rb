class UserSerializer < ActiveModel::Serializer
  attributes :username

  has_many :forum_entries
  has_many :plants, through: :forum_entries
end
