class AddImageUrlToListings < ActiveRecord::Migration[5.2]
  def change
        add_column :listings, :imageUrl, :string
  end
end
