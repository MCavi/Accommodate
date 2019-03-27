import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root'
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
    const store = configureStore()
    const root = document.getElementById('root');

    // START TESTING
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    // END TESTING

    ReactDOM.render(<Root store={store}/>, root);
});