import * as ListingApiUtil from '../util/listing_api_util';


export const RECEIVE_LISTINGS = "RECEIVE_LISTINGS";
export const RECEIVE_LISTING = "RECEIVE_LISTING";
export const REMOVE_LISTING = "REMOVE_LISTING";

export const receiveListings = listings => ({
    type: RECEIVE_LISTINGS,
    listings
});

export const receiveListing = listing => ({
    type: RECEIVE_LISTING,
    listing
});

export const removeListing = listingId => ({
    type: REMOVE_LISTING,
    listingId
})

export const fetchListings = (filters) => dispatch => {
    return ListingApiUtil.fetchListings(filters).then(listings => dispatch(receiveListings(listings)))
};

export const fetchListing = (listing) => dispatch => {
    return ListingApiUtil.fetchListing(listing).then(listing => dispatch(receiveListing(listing)))
};

export const createListing = (listing) => dispatch => {
    return ListingApiUtil.createListing(listing).then(listing => dispatch(receiveListing(listing)))
};

export const updateListing = (listing) => dispatch => {
    return ListingApiUtil.updateListing(listing).then(listing => dispatch(receiveListing(listing)))
};

export const deleteListing = (listingId) => dispatch => {
    return ListingApiUtil.deleteListing(listingId).then(listingId => dispatch(removeListing(listingId)))
};