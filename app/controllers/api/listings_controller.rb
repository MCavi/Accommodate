class Api::ListingsController < ApplicationController

    # before_action :logged_in?, only: [:create]

    def create
        @listing = Listing.new(listings_params)
        if @listing.save
            render :show
        end 
    end
    
    def index
        
        capacity = params[:capacity]

        listings = params[:bounds] ? Listing.in_bounds(params[:bounds]) : Listing.all

        if capacity
            listings = listings.where(capacity: capacity)
        end 
        

        # if params[:minSeating] && params[:maxSeating]
        # benches = benches.where(seating: seating_range)
        # end

        @listings = listings
        render :index

        # @listings = Listing.in_bounds(params[:bounds])
        # render :index
    end

    def show
        @listing = Listing.find(params[:id])
    end 

    # def update
    #     @listing = Listings.find_by(params[id])
    # end 

    # def destroy

    # end 

    private
    def listings_params
        params.require(:listing).permit(:title, :address, :listing_type, :lat, :long, :rate, :capacity, :num_bedroom, :num_bed, :num_bathroom, :description)
    end     

end 