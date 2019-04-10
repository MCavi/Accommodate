class AddConstraintToBookings < ActiveRecord::Migration[5.2]
  def change
    change_column :bookings, :start_date, :date, null: false
    change_column :bookings, :num_guests, :integer, null: false
  end
end
