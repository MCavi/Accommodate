import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createBooking } from '../../actions/bookings_actions';
import { openConfirmModal, closeModal } from '../../actions/modal_actions';
import BookingForm from './booking_form';
// const msp = (state, ownProps) => {
    
//     return {
//         listingId: ownProps.match.params.listingId 
//     }
// }

const mdp = dispatch => ({
    openConfirmModal: (modal, booking) => dispatch(openConfirmModal(modal, booking)),
    closeModal: () => dispatch(closeModal())
})

export default withRouter(connect(null, mdp)(BookingForm));