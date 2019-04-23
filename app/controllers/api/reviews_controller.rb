class Api::ReviewsController < ApplicationController

    # before_action :require_loggin only :create

    def create 
        @review = Review.new(review_params)
        @review.author_id = current_user.id
        @review.save
        render :show
        flash[:errors] = @review.errors.full_messages
    end 

    def index
        @reviews = Review.where(listing_id: params[:listingId]).includes(:author)
        render :index
    end 

    # def destroy 
    #     review = Review.find(params[:id])
    #     review.destroy
    #     render 
    # end

    private
    def review_params
        params.require(:review).permit(:listing_id, :body, :rating)
    end 

end 