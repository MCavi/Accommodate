class Booking < ApplicationRecord 

    STATUS = %w(PENDING APPROVED DENIED).freeze

    validates :listing_id, :renter_id, :status, :start_date, :end_date, presence: true
    validate :start_date_comes_before_end_date
    validate :does_not_overlap_approved_bookings
    validates :status, inclusion: STATUS


    # belongs_to_many :listings

    # belongs_to_many :renters,
    #     foreign_key: :renter_id,
    #     primary_key: :id, 
    #     class_name: :User

    after_initialize :assign_pending_to_status

    # def approve
    #     transcation do
    #         self.status = "APPROVED"
    #         self.save!
    #     end
    # end 
end