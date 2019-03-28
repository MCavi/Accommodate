import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root'
import configureStore from './store/store';

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
    // END TESTING

    ReactDOM.render(<Root store={store}/>, root);
});