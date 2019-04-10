json.user do
    json.partial! "api/users/user", user: @user
    json.bookingIds @user.bookings.ids
end 

json.bookings do
    @user.bookings.each do |booking|
        json.set! booking.id do 
            json.partial! "api/bookings/booking", booking: booking
        end
    end 
end 