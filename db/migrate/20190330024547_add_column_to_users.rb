class AddColumnToUsers < ActiveRecord::Migration[5.2]
  def change
    t.string :thumbnail_url
  end
end
