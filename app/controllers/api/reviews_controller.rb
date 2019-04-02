class ReviewsContoller < ApplicationController

    # before_action :require_loggin only :create

    def create 
        @review = Review.new(review_params)
        @review.author_id = current_user.id
        @review.listing_id = params[:listing_id]
        @review.save
        flash[:errors] = review.errors.full_messages
        # render :index
    end 

    def index
        @reviews = Review.All
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