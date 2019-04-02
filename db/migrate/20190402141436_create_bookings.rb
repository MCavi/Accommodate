class CreateBookings < ActiveRecord::Migration[5.2]
  def change
    create_table :bookings do |t|
      t.integer :listing_id, null: false
      t.integer :renter_id, null: false
      t.string :status, null: false
      t.date :state_date, null: false
      t.date :end_date, null: false
      t.timestamps
    end
    add_index :bookings, :listing_id
    add_index :bookings, :renter_id
  end
end
