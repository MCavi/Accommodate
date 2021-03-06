import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LoginFormContainer from '../session_form/login_form_container';
import SignupFormContainer from '../session_form/signup_form_container';
import ConfirmationModal from '../booking/confirmation_modal_container'

function Modal({ modal, booking, closeModal }) {
    if (!modal) {
        return null;
    }

    let component;
    switch (modal) {
        case 'Login':
            component = <LoginFormContainer />;
            break;
        case 'Signup':
            component = <SignupFormContainer />;
            break;
        case "bookingConfirmation":
            component = <ConfirmationModal booking={booking}/>
            break;
        default:
            return null;
    }
    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    );
}

const msp = ({ui}) => {
    return {
        modal: ui.modal,
        booking: ui.booking,
    };
};

const mdp = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(msp, mdp)(Modal);