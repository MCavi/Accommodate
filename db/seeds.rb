# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# user1 = User.create!({email: "mike3", password: "starwars", first_name: "Mike", last_name: "Yoon"})
location1 = Listing.create!({host_id: 4, title: "Lovely apartment", address: "21 Division St Greenwich, CT 06830", lat: 41.001269, long: -73.657621, rate: 200, capacity: 4, num_bedroom: 2, num_bed: 2, num_bathroom: 2, description: "Clean house just 45 minutes away from NYC."})
location2 = Listing.create!({host_id: 1, title: "Centrally Located Gem", address: "450 W 17th St, New York, NY 10011", lat: 40.743884, long: -74.006160, rate: 200, capacity: 4, num_bedroom: 2, num_bed: 2, num_bathroom: 1, description: "Lux apartment with killer views of the Hudson."})
location3 = Listing.create!({host_id: 3, title: "Beautiful Brownstown", address: "240 Baltic Street Brooklyn, NY 11201", lat: 40.686310, long: -73.995038, rate: 200, capacity: 4, num_bedroom: 2, num_bed: 2, num_bathroom: 2, description: "Beautiful, historic Brownstone."})