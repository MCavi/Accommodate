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

        let pics = [
            window.apartment1,
            window.apartment2,
            window.apartment3,
            window.apartment4,
            window.apartment5
        ]
        let random = Math.floor(Math.random() * 4)
        let pic = pics[random];


        return (
            <div className="main-booking-section">

                <div className="main-booking-image" onClick={this.linkToShow.bind(this)}>
                    <div className='grid-item-image-container' style={{ margin: '20px' }}>
                        <img className="grid-item-image" src={pic} />
                    </div>
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