import merge from 'lodash/merge';

import {
    RECEIVE_REVIEW, RECEIVE_REVIEWS
} from '../actions/listings_actions';

const reviewsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        default:
            return oldState;
        case RECEIVE_REVIEWS:
            return action.reviews;
        case RECEIVE_REVIEW:
            return merge({}, oldState, { [action.review.id]: action.review });
    };
};

export default reviewsReducer;