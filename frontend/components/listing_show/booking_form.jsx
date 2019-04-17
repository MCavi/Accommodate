import React from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
// import '../../../app/assets/stylesheets/_react_dates_override.css';
// import 'react-dates/lib/css/_datepicker.css';

class BookingForm extends React.Component {
    constructor(props) {
        
        super(props);
        this.state = { startDate: moment(), endDate: null, numGuests: 1, focusedInput: null };
        this.onClic = this.onClic.bind(this);
        this.onChange = this.onChange.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
    }

    onFocusChange(focusedInput) {
        this.setState({ focusedInput: !focusedInput ? moment() : focusedInput });
    }

    onChange(e){
        this.setState({ [e.target.name]: e.target.value });
    }

    renderErrors(errors) {

    }

    onClic(e){
        e.preventDefault()
        const booking = {
            start_date: this.state.startDate.format('YYYY-MM-DD HH:mm:00'),
            end_date: this.state.endDate.format('YYYY-MM-DD HH:mm:00'),
            num_guests: this.state.numGuests,
            listing_id: this.props.listing.id
        }
        

        this.props.createBooking(booking)
            .then(() => this.props.history.push('/index'), 
                () => this.renderErrors());
        
    }

    render() {
        const { listing, reviews } = this.props;
        let listingReviews;
        let ratingTotal = 0;
        let numRating = 0;
        return (
            <div>
                <div className="show-checkout">
                    <div className="checkout-top">
                        <div className="checkout-rate">
                            <span className="span-rate">${this.props.listing.rate}</span>
                            <span className="span-per-night">per night</span>
                        </div>
                        <div className="checkout-review">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <span className="num-reviews">{numRating}</span>
                        </div>

                    </div>

                    <div className="checkout-date">
                        <p className="p-dates">Dates</p>
                        <DateRangePicker
                            startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                            startDateId="StartDateId" // PropTypes.string.isRequired,
                            endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                            endDateId="endDateId" // PropTypes.string.isRequired,
                            onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
                            focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                            onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
                        />
                    </div>

                    <div className="checkout-guests">
                        <label>Guests</label>
                        <select className="num-guests" name="numGuests" onChange={this.onChange}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                        </select>
                    </div>

                    <button className="checkout-submit" onClick={this.onClic}>Book</button>


                </div>
                
                



            </div>
        )
    };
};



export default BookingForm;