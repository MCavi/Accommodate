class RemoveThumbnailUrlFromUsers < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :thumbnailUrl, :string
  end
end
