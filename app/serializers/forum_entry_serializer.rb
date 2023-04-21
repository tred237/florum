class ForumEntrySerializer < ActiveModel::Serializer
  attributes :id, :entry, :created_at, :entry_username

  def entry_username
    User.find(self.object.user_id).username
  end

  belongs_to :user
  belongs_to :plant
end
