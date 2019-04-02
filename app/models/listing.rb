class Listing < ApplicationRecord 

    validates :host_id, :title, :address, :lat, :long, :rate, :capacity, presence: true
    validates :address, uniqueness: true

    belongs_to :host,
        primary_key: :id, 
        foreign_key: :host_id,
        class_name: :User

    has_many :bookings

    has_many :reviews

        def self.in_bounds(bounds)
            self.where("lat < ?", bounds[:northEast][:lat])
            .where("lat > ?", bounds[:southWest][:lat])
            .where("long > ?", bounds[:southWest][:lng])
            .where("long < ?", bounds[:northEast][:lng])
        end 

end 