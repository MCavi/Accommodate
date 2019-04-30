import React from 'react';
import NavBar from '../navbar/navbar';
import ReviewItem from '../reviews/review_item';
import BookingItem from '../booking/booking_item';

class UserShow extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchReviews();
        this.props.fetchBookings();
    }

    render(){
        
        const usersReviews = [];
        const usersBookings = [];

        let userReviewItems = null;
        let userBookingItems = null;
        let picture = null;


        Object.values(this.props.reviews).forEach( review => {
            if ( review.author_id === this.props.user.id ) usersReviews.push(review);
        });

        Object.values(this.props.bookings).forEach( booking => {
            if (booking.renter_id === this.props.user.id) usersBookings.push(booking);
        });

        if ( usersReviews.length > 0  ) {
            userReviewItems = usersReviews.map(review => {
                return (
                    <ReviewItem review={review} key={review.id} />
                );
            });
        };

        if (usersBookings.length > 0) {
            userBookingItems = usersBookings.map(booking => {
                return (
                    <BookingItem booking={booking} key={booking.id} />
                );
            });
        };

        if (this.props.user.photoUrl) {
            picture = this.props.user.photoUrl;
        }

        debugger
        return(
            <div>
                <NavBar />
                <div className="main-section">
                    <div className="profile-section">
                        <img src={picture} alt="User Thumbnail"/>
                        <p className="profile-user-name">Hello, {this.props.user.first_name} {this.props.user.last_name}</p>
                    </div>
                    
                    <div className="profile-list-section">
                        <h2>Your Reviews</h2>
                        <ul>
                            {userReviewItems}
                        </ul>

                        <h2>Your Bookings</h2>
                        <div>

                            {userBookingItems}
                        </div>
                    </div>

                </div>        

            </div>
        )
    }
}

export default UserShow;