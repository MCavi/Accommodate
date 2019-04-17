import * as BookingApiUtil from '../util/booking_api_util';

export const RECEIVE_ALL_BOOKINGS = "RECEIVE_ALL_BOOKINGS"
export const RECEIVE_BOOKING = "RECEIVE_BOOKING"


export const createBooking = booking => dispatch => (
    BookingApiUtil.createBooking(booking).then(booking => dispatch(receiveBooking(booking)))
);

export const fetchBookings = () => dispatch => {
    return BookingApiUtil.fetchBookings().then(bookings => dispatch(receiveAllBookings(bookings)))
};

export const fetchBooking = bookingId => dispatch => (
    BookingApiUtil.fetchBooking(bookingId).then(booking => dispatch(receiveBooking(booking)))
);

const receiveAllBookings = bookings => {
    return {
    type: RECEIVE_ALL_BOOKINGS,
    bookings
    }
};

const receiveBooking = booking => ({
    type: RECEIVE_BOOKING,
    booking
});

