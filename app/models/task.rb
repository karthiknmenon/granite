class Task < ApplicationRecord
    before_validation :set_default_to_status
    validates :title, :description, presence: true
    validates :status,  inclusion: { in: ["active", "archived"] }
    belongs_to :user, optional: true


    def set_default_to_status
        self.status = "active" if status.blank? 
    end
    
end