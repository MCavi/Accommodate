class CreateListings < ActiveRecord::Migration[5.2]
  def change
    create_table :listings do |t|
      t.integer :host_id, null: false
      t.string :title, null: false 
      t.text :address, null: false
      t.float :lat, null: false
      t.float :long, null: false
      t.float :rate, null: false
      t.integer :capacity, null: false
      t.integer :num_bedroom
      t.integer :num_bed
      t.integer :num_bathroom
      t.text :description
      t.timestamps
    end

    add_index :listings, :host_id
  end
end
