class Api::BookingsController < ApplicationController

    def create 
        @booking = Booking.new(booking_params)
        @booking.renter_id = current_user.id
        @booking.listing_id = params[:booking][:listing_id]
        @booking.save
        render json: @booking.errors.full_messages
    end 

    def index
        @bookings = Booking.where(renter_id: current_user.id).includes(:listing)
        render :index
    end 

    private
    def booking_params
        params.require(:booking).permit(:listing_id, :start_date, :end_date, :num_guests)
    end 


end 