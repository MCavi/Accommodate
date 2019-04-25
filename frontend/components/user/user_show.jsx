import React from 'react';
import NavBar from '../navbar/navbar';

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

        this.props.reviews.forEach( review => {
            if ( review.author_id === this.props.user.id ) usersReviews.push(review);
        })

        this.props.bookings.forEach(booking => {
            if (booking.author_id === this.props.user.id) usersBookings.push(booking);
        })


        return(
            <div>
                <NavBar />
                <div className="main-section">
                    <div className="profile-section">
                        <img src={window.defaultThumbnail} alt="User Thumbnail"/>
                        <p className="profile-user-name">Hello, {this.props.user.first_name} {this.props.user.last_name}</p>
                    </div>
                    
                    <div className="profile-list-section">
                        <ul>
                            {null}
                        </ul>
                    </div>

                </div>        
            </div>
        )
    }
}

export default UserShow;