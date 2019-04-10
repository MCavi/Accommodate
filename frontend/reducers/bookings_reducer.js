import { RECEIVE_ALL_BOOKINGS, RECEIVE_BOOKING } from '../actions/bookings_actions';
import {merge} from 'lodash';

const bookingsReducer = ( oldState = {}, action ) => {
    Object.freeze(oldState);
    switch(action.type) {
        default:
            return oldState;
        case RECEIVE_ALL_BOOKINGS:
            return merge({}, oldState, action.bookings);
        case RECEIVE_BOOKING:
            return merge({}, oldState, {[action.booking.id]: action.booking});
    }
}

export default bookingsReducer;