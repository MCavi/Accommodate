class Booking < ApplicationRecord 

    # STATUS = %w(PENDING APPROVED DENIED).freeze

    validates :listing_id, :renter_id, :start_date, :end_date, presence: true
    validate :overlapping_bookings


    belongs_to :renter,
        foreign_key: :renter_id, 
        primary_key: :id,
        class_name: :User

    belongs_to :listing, 
        foreign_key: :listing_id, 
        primary_key: :id, 
        class_name: :Listing

    # after_initialize :assign_pending_to_status

    # def approve
    #     transcation do
    #         self.status = "APPROVED"
    #         self.save!
    #     end
    # end 


    def overlapping_bookings
        bookings = Booking.where.not(id: self.id).where(listing_id: listing_id)
        .where.not('start_date > :end_date OR end_date < :start_date',
            start_date: start_date, end_date: end_date)            
        unless bookings.empty?
            errors[:base] << 'Request conflicts with existing approved request'
        end
    end

    def start_must_come_before_end
        return if start_date < end_date
        errors[:start_date] << 'must come before end date'
        errors[:end_date] << 'must come after start date'
    end

end