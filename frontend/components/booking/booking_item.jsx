import React from 'react';
import { withRouter } from 'react-router-dom';


class BookingItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.booking;
    }

    linkToShow(){
        this.props.history.push(`/listings/${this.state.listing_id}`)
    }

    render() {

        const pics = ['grid-item-image-container1', 'grid-item-image-container2', 'grid-item-image-container3', 'grid-item-image-container4', 'grid-item-image-container5']
        const random = Math.floor(Math.random() * 4)
        const pic = pics[random];


        return (
            <div className="main-booking-section">

                <div className="main-booking-image" onClick={this.linkToShow.bind(this)}>
                    <div className={pic} style={{margin:'20px'}}></div>
                </div>

                <div className="main-booking-info">
                    <p>Address: {this.state.address}</p>
                    <p>Start Date: {this.state.start_date}</p>
                    <p>End Date: {this.state.end_date}</p>
                </div>
            </div>
        )

    }

}

export default withRouter(BookingItem); 