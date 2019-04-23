import * as ListingApiUtil from '../util/listing_api_util';


export const RECEIVE_LISTINGS = "RECEIVE_LISTINGS";
export const RECEIVE_LISTING = "RECEIVE_LISTING";
export const REMOVE_LISTING = "REMOVE_LISTING";
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS";




export const receiveListings = listings => {
    return ({
        type: RECEIVE_LISTINGS,
        listings
    })
};

export const receiveListing = payload => ({
    type: RECEIVE_LISTING,
    payload
});

export const removeListing = listingId => ({
    type: REMOVE_LISTING,
    listingId
})

export const receiveReview = review => {
    return {
        type: RECEIVE_REVIEW, 
        review
    }   
}

export const receiveReviews = reviews => {
    return {
        type: RECEIVE_REVIEWS,
        reviews
    }
}

export const fetchListings = (filters) => dispatch => {
    return ListingApiUtil.fetchListings(filters).then(listings => dispatch(receiveListings(listings)));
};

export const fetchListing = (listing) => dispatch => {
    return ListingApiUtil.fetchListing(listing).then(payload => dispatch(receiveListing(payload)));
};

export const createListing = (listing) => dispatch => {
    return ListingApiUtil.createListing(listing).then(listing => dispatch(receiveListing(listing)));
};

export const updateListing = (listing) => dispatch => {
    return ListingApiUtil.updateListing(listing).then(listing => dispatch(receiveListing(listing)));
};

export const deleteListing = (listingId) => dispatch => {
    return ListingApiUtil.deleteListing(listingId).then(listingId => dispatch(removeListing(listingId)));
};

export const createReview = (review) => dispatch => {
    return ListingApiUtil.createReview(review).then((review) => dispatch(receiveReview(review)));
};

export const fetchReviews = (listingId) => dispatch => {
    return ListingApiUtil.fetchReviews(listingId).then(reviews => 
        {
            dispatch(receiveReviews(reviews));
        })
};