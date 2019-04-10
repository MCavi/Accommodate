@bookings.each do |booking|  
    json.set! booking.id do
        json.partial! "api/bookings/booking", booking: booking
        json.extract! booking.listing, :address
    end 
end 