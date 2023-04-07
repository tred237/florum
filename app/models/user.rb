class User < ApplicationRecord
    has_secure_password
    has_many :forum_entries
    has_many :plants, through: :forum_entries

    validates :username, presence: true
    validates :password, length: {in: 6..20}
end
