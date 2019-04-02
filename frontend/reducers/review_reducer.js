import merge from 'lodash/merge';

import {
    RECEIVE_LISTING,
    RECEIVE_REVIEW,
} from '../actions/listings_actions';

const reviewsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_LISTING:
            return merge({}, oldState, action.reviews);
        case RECEIVE_REVIEW:
            const { review } = action;
            return merge({}, oldState, { [review.id]: review });
        default:
            return oldState;
    }
}

export default reviewsReducer;