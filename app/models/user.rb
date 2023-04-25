class User < ApplicationRecord
    has_secure_password
    password_requirements = /(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*()_+])/
    
    has_many :forum_entries
    has_many :plants, through: :forum_entries
    has_many :owned_plants, foreign_key: "owner_id", class_name: "Plant"

    validates :username, presence: true, uniqueness: true
    validates :email, presence: true, uniqueness: true
    validates :password, confirmation: true, length: {in: 6..20}, format: {with: password_requirements, message: "format invalid"}
    validates :password_confirmation, presence: true
end
