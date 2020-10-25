class Task < ApplicationRecord
    before_validation :set_default_to_status
    validates :title, :description, presence: true
    validates :status,  inclusion: { in: ["active", "archived"] }


    def set_default_to_status
        self.status = "active" if status.blank? 
    end
    
end