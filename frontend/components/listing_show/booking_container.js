import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createBooking } from '../../actions/bookings_actions';
import BookingForm from './booking_form';

// const msp = (state, ownProps) => {
//     
//     return {
//         listingId: ownProps.match.params.listingId 
//     }
// }

const mdp = dispatch => ({
    createBooking: booking =>dispatch(createBooking(booking))
})

export default withRouter(connect(null, mdp)(BookingForm));