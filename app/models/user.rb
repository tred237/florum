class User < ApplicationRecord
    has_secure_password
    
    has_many :forum_entries
    has_many :plants, through: :forum_entries
    has_many :owned_plants, foreign_key: "owner_id", class_name: "Plant"

    validates :username, presence: true, uniqueness: true
    validates :email, presence: true, uniqueness: true
    validates :password, confirmation: true
    validates :password_confirmation, presence: true
end
