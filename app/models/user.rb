class User < ApplicationRecord
    has_secure_password
    has_many :forum_entries
    has_many :plants, through: :forum_entries
end
