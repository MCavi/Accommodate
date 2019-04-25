import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ConfirmationModal from './confirmation_modal';
import { closeModal } from '../../actions/modal_actions';
import { createBooking } from '../../actions/bookings_actions';



const msp = ({entities}, ownProps) => {
    return {
    listing: entities.listings[ownProps.match.params.listingId],
    bookings: entities.bookings
    }
};

const mdp = dispatch => ({
    closeModal: () => dispatch(closeModal()),
    createBooking: booking => dispatch(createBooking(booking))
});

export default withRouter(connect(msp, mdp)(ConfirmationModal));
