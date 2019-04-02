class Review < ApplicationRecord 

    validates :body, :rating, presence: true

    belongs_to :author, 
        foreign_key: :author_id, 
        primary_key: :id, 
        class_name: :User

    belongs_to :listing

end 