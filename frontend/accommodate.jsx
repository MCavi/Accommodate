import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root'
import configureStore from './store/store';
import * as listingUtil from './util/listing_api_util';
import * as userUtil from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');

    let store;
    if (window.currentUser) {
        const { currentUser } = window;
        const { id } = currentUser;
        const preloadedState = {
            entities: {
                users: {
                    [id]: currentUser
                }
            },
            session: { id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;

    } else {
        store = configureStore();
    }

    // START TESTING
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.signup = userUtil.signup;
    window.logout = userUtil.logout
    window.fetchListings = listingUtil.fetchListings
    window.fetchListing = listingUtil.fetchListing
    window.createListing = listingUtil.createListing
    // END TESTING

    ReactDOM.render(<Root store={store}/>, root);
});