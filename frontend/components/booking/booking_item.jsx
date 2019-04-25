import React from 'react';

class BookingItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.booking;
    }

    render() {

        const pics = ['grid-item-image-container1', 'grid-item-image-container2', 'grid-item-image-container3', 'grid-item-image-container4', 'grid-item-image-container5']
        const random = Math.floor(Math.random() * 4)
        const pic = pics[random];


        return (
            <div className="main-booking-section">
                <div className="main-booking-picture">
                    {pic}
                </div>

                <div className="main-booking-info">
                    <p>{this.state.address}</p>
                    <p>{this.state.start_date}</p>
                    <p>{this.state.end_date}</p>
                </div>
            </div>
        )

    }

}

export default BookingItem; 