class ForumEntry < ApplicationRecord
    belongs_to :user
    belongs_to :plant

    validates :entry, length: { in: 3..1000}
end
