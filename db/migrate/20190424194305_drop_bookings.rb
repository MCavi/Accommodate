class DropBookings < ActiveRecord::Migration[5.2]
  def change
    drop_table :bookings
  end
end
