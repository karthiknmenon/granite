class User < ApplicationRecord
    before_save :set_name_if_empty
    has_secure_password
    validates :email, presence: true, uniqueness: true
    has_many :tasks, dependent: :destroy
    has_many :comments, dependent: :destroy

    private 
        def set_name_if_empty
            self.name = email.partition("@")[0] if name.blank?
        end
end