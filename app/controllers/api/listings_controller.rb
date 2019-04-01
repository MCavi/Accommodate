class Api::ListingsController < ApplicationController

    # before_action :logged_in?, only: [:create]

    def create
        @listing = Listing.new(listings_params)
        if @listing.save
            render :show
        end 
    end
    
    def index
        @listings = Listing.in_bounds(params[:bounds])
        render :index
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
        params.require(:listing).permit(:host_id, :title, :address, :lat, :long, :rate, :capacity, :num_bedroom, :num_bed, :num_bathroom, :description)
    end     

end 