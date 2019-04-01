import React from 'react';
import { connect } from 'react-redux';
import { fetchListings } from '../../actions/listings_actions';
import ListingIndex from './listing_index';

const msp = state => ({
    listings: Object.values(state.entities.listings)
});

const mdp = dispatch => ({
    fetchListings: (filters) => dispatch(fetchListings(filters))
});

export default connect(msp, mdp)(ListingIndex);