json.extract! @review, :id, :author_id, :listing_id, :body, :rating, :created_at
json.extract! @review.author, :first_name, :thumbnailUrl
