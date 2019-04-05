class AddListingTypeToListings < ActiveRecord::Migration[5.2]
  def change
    add_column :listings, :listing_type, :string
  end
end
