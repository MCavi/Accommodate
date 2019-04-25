import { OPEN_MODAL, CLOSE_MODAL, CONFIRM_MODAL, THANKYOU_MODAL } from '../actions/modal_actions';

export default function modalReducer(state = null, action) {
    switch (action.type) {
        default:
            return state;
        case OPEN_MODAL:
            return action.modal;
        case CLOSE_MODAL:
            return null;
        case CONFIRM_MODAL:
            return action.modal;
    }
}