class ForumEntrySerializer < ActiveModel::Serializer
  attributes :id, :entry, :edited, :created_at, :user_id, :entry_username

  def entry_username
    User.find(self.object.user_id).username
  end
end
