class Plant < ApplicationRecord
    has_many :forum_entries
    has_many :users, through: :forum_entries
end
