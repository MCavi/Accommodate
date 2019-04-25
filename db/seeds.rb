# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Listing.destroy_all
Review.destroy_all

user1 = User.create!({email: "mike3@gmail.email", password: "starwars", first_name: "Mike", last_name: "Yoon"})
user2 = User.create!({email: "JJYang@gmail.email", password: "starwars", first_name: "JJ", last_name: "Yang"})
user3 = User.create!({email: "Nick@gmail.com", password: "starwars", first_name: "Nick", last_name: "asdlkj"})
location2 = user2.listings.create!({title: "Centrally Located Gem", address: "450 W 17th St, New York, NY 10011", listing_type: 'Entire Apartment', lat: 40.743884, long: -74.006160, rate: 200, capacity: 4, num_bedroom: 2, num_bed: 2, num_bathroom: 1, description: "Lux apartment with killer views of the Hudson."})
location3 = user2.listings.create!({title: "Beautiful Brownstone", address: "240 Baltic Street Brooklyn, NY 11201", listing_type: 'Entire Apartment', lat: 40.686310, long: -73.995038, rate: 200, capacity: 4, num_bedroom: 2, num_bed: 2, num_bathroom: 2, description: "Beautiful, historic Brownstone."})
location4 = user2.listings.create!({title: "Great location on a budget, POOL", address: "2418-2350 Dell Ave Venice, CA 90291", listing_type: 'Private Room', lat: 33.984875, long: -118.466868, rate: 185, capacity: 1, num_bedroom: 1, num_bed: 1, num_bathroom: 1, description: "Welcome to our house! Centrally located in historic Hancock Park, we just short drive away from Hollywood Attractions, Beverly Hills, Grove Shopping Center, Universal Studio, Downtown LA!"})
location5 = user2.listings.create!({title: "Private Pool House with Amazing Views!", address: "2072-2076 Sullivan Fire Rd Pacific Palisades, CA 90272", listing_type: 'Entire House', lat: 34.063983, long: -118.505198, rate: 350, capacity: 4, num_bedroom: 2, num_bed: 2, num_bathroom: 1, description: "Spacious, private pool house. Centrally located in LA, close to Downtown LA, Hollywood and our neighboring cities of Glendale and Pasadena. Private compound with breathtaking views and access to pool and spa with free gated parking!"})
location6 = user2.listings.create!({title: "Classic Private Room in West LA", address: "100 S Doheny Dr Los Angeles, CA 90048", listing_type: 'Private Room', lat: 34.074883, long: -118.389795, rate: 50, capacity: 1, num_bedroom: 1, num_bed: 1, num_bathroom: 1, description: "My house has two bathrooms, a full kitchen, and a nice outdoor patio and garden. The neighborhood is safe, centrally located, and has good public transportation. Perfect for students and visitors. No animals or smoking please."})
location7 = user2.listings.create!({title: "Cozy Beach Single w Peek-a-Boo Ocean View-B14", address: "Ocean Park Santa Monica, CA 90405", listing_type: 'Entire Apartment', lat: 34.004064, long:  -118.486484, rate: 215, capacity: 5, num_bedroom: 2, num_bed: 2, num_bathroom: 1, description: "Charming and bright Venice beach single next to the World Famous Venice Boardwalk with Peek-a-Boo ocean views from the balcony. You are steps to the beach and have a view of the ocean. Internet, Cable, Stocked Kitchen, and Towels for the beach!"})
location8 = user2.listings.create!({title: "HUGE Venice Beach private Studio 1 Block to Beach", address: "14-98 Hurricane St Marina Del Rey, CA 90292", listing_type: 'Entire House', lat: 33.975328, long: -118.462474, rate: 39, capacity: 4, num_bedroom: 1, num_bed: 2, num_bathroom: 1, description: "Heart of Venice Beach & Marina DelRey - A HUGE Studio & Patio w. PARKING &only 2 mins to the beach - HIGH Speed WIFI that always works - Web-TV & Cable. If you like a peaceful beach escape for VACATION or BUSINESS you are at the right place. 1 block to the sand. The HUGE place is in the amazing safe and quiet location, just off the famous Washington Boulevard Shops, Restaurants & Starbucks (LA's No.1 Beach street). This is the SAFE & trendy part of Venice Beach/Marina Del Rey. Best Neighborhood."})
location9 = user2.listings.create!({title: "TOP OF THE HILL ACRES", address: "N Vermont Canyon Rd Los Angeles, CA 90027", listing_type: 'Entire Apartment', lat: 34.123704, long: -118.298060, rate: 125, capacity: 2, num_bedroom: 1, num_bed: 2, num_bathroom: 1, description: "Rugged, beautiful landscape with picturesque mountain views and wide open cloudless blue skies. The morning crisp light to the sunset glow. The perfect spot for any photo shoot. Beauty. Simplicity. Nature."})
location10 = user2.listings.create!({title: "Sweetest Cottage in Venice Beach", address: "809-801 Harbor Crossing Ln Marina Del Rey, CA 90292", listing_type: 'Entire House', lat: 33.985986, long: -118.450931, rate: 500, capacity: 2, num_bedroom: 1, num_bed: 1, num_bathroom: 1, description: "Have a backyard barbecue and eat at a shaded picnic table after exploring Abbot Kinney on bikes. Retreat indoors to a unique corner of paradise, decorated in eclectic beach chic. It’s a bright and airy cottage—a classic Craftsman with a modern twist."})
location11 = user2.listings.create!({title: "Magic Manhattan with Rooftop", address: "75 Christopher St, New York, NY 10014", listing_type: 'Entire Apartment', lat: 40.734612, long: -74.003805, rate: 45, capacity: 2, num_bedroom: 1, num_bed: 1, num_bathroom: 1, description: "Stay in your very own, cool downtown apartment with designer furniture and rooftop with downtown skyline views and an amazing rooftop garden. VERY fast Wi-Fi + TV with FREE Netflix."})
location12 = user2.listings.create!({title: "Manhattan Lux Loft.Like.Love.Lots.Look !", address: "504-598 E 5th St New York, NY 10009", listing_type: 'Entire Apartment', lat: 40.724762, long: -73.984188, rate: 85, capacity: 5, num_bedroom: 1, num_bed: 3, num_bathroom: 1, description: "Downtown, the best bit of Manhattan. One of, if not the, LARGEST space on Airbnb in NYC. Your Own PRIVATE Bathroom & PRIVATE Bedroom, a Terrace off the bedroom, near to subways/buses, restaurants, bars, real luxury right in the middle of things. "})
location13 = user2.listings.create!({title: "Luxury Central Park Apartment close to everything", address: "198-100 W 15th St New York, NY 10011", listing_type: 'Entire Apartment', lat: 40.738636, long: -73.997740, rate: 25, capacity: 4, num_bedroom: 1, num_bed: 4, num_bathroom: 1, description: "My place is located close to Central Park West and Columbia University. It is very modern and clean. Public transportation just steps away and can take you everywhere in New York City. My place is good for couples,families with kids,business travelers, friends and solo adventurers. We have one of the best shopping areas in NYC. You can find great bargain. If you like walking, biking,boating and other sport activities Central Park will be your place. COME TO VISIT NEW YORK CITY!!!})


review1 = Review.create!({author_id: user3.id, rating: 1, body: "JJ was a horrible host! Would NOT recommend.", listing_id: location8.id})
review2 = Review.create!({author_id: user1.id, rating: 2, body: "This house smells really bad.", listing_id: location8.id})