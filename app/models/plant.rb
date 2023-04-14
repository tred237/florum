class Plant < ApplicationRecord
    has_many :forum_entries
    has_many :users, through: :forum_entries
    belongs_to :owner, foreign_key: :owner_id, class_name: 'User'

    validates :name, presence: true
    validates :light, presence: true
    validates :water, presence: true
    validates :safe_for_pets, presence: true
end
