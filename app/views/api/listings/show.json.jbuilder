json.listing do 
    json.partial! "api/listings/listing", listing: @listing
    json.reviewIds @listing.reviews.ids
end

# json.reviews do
#     @listing.reviews.each do |review|
#         json.set! review.id do 
#             json.partial! "api/reviews/review", review: review
#         end
#     end
# end 