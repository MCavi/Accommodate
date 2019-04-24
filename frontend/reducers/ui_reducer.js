import { combineReducers } from 'redux';
import Modal from './modal_reducer';
import Booking from './ui_booking_reducer';

export default combineReducers({
    modal: Modal,
    booking: Booking
})