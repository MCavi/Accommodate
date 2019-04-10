import UsersReducer from './users_reducer';
import { combineReducers } from 'redux';
import ListingsReducer from './listings_reducer';
import BookingsReducer from './bookings_reducer';
// import ReviewReducer from './review_reducer';

const EntitiesReducer = combineReducers({
    users: UsersReducer,
    listings: ListingsReducer,
    bookings: BookingsReducer
    // reviews: ReviewReducer
});

export default EntitiesReducer;