class AddColumnToBookings < ActiveRecord::Migration[5.2]
  def change
    remove_column :bookings, :state_date, :date
    add_column :bookings, :num_guests, :integer
    add_column :bookings, :start_date, :date
  end
end
