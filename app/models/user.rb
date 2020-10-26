class User < ApplicationRecord
    has_many :tasks, dependent: :destroy
    has_secure_password
    validates :email, presence: true, uniqueness: true
end