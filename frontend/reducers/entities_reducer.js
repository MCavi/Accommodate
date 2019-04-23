import UsersReducer from './users_reducer';
import { combineReducers } from 'redux';
import ListingsReducer from './listings_reducer';
import BookingsReducer from './bookings_reducer';
import ReviewReducer from './review_reducer';
// import ReviewReducer from './review_reducer';

const EntitiesReducer = combineReducers({
    users: UsersReducer,
    reviews: ReviewReducer,
    listings: ListingsReducer,
    bookings: BookingsReducer
});

export default EntitiesReducer;