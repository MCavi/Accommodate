class AddImageUrlToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :thumbnailUrl, :string
  end
end
