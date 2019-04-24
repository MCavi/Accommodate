import {CONFIRM_MODAL, CLOSE_MODAL} from "../actions/modal_actions";

export default function modalReducer(state = null, action) {
    debugger
    switch (action.type) {
        default:
            return state;
        case CONFIRM_MODAL:
            return action.booking;
        case CLOSE_MODAL:
            return null;

    }
}