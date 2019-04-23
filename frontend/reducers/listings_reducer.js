import {merge} from 'lodash';
import { RECEIVE_LISTINGS, RECEIVE_LISTING, REMOVE_LISTING, RECEIVE_REVIEW} from '../actions/listings_actions';

const listingsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch(action.type){
        default:
            return oldState;
        case RECEIVE_LISTINGS:  
            return action.listings;
        case RECEIVE_LISTING:
            return merge({}, oldState, {[action.payload.listing.id]: action.payload});
        case REMOVE_LISTING:
            const newState = merge({}, oldState);
            delete(newState[action.listingId]);
            return newState;
    }
};

export default listingsReducer;