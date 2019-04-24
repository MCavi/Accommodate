import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { openConfirmModal, closeModal } from '../../actions/modal_actions';
import BookingForm from './booking_form';

const mdp = dispatch => ({
    openConfirmModal: (modal, booking) => dispatch(openConfirmModal(modal, booking)),
    closeModal: () => dispatch(closeModal())
})

export default withRouter(connect(null, mdp)(BookingForm));