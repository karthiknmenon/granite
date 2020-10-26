class User < ApplicationRecord
    before_save :set_name_if_empty
    has_many :tasks, dependent: :destroy
    has_secure_password
    validates :email, presence: true, uniqueness: true

    private 
        def set_name_if_empty
            self.name = email.partition("@")[0] if name.blank?
        end
end