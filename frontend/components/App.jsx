import React from 'react';
import {Provider} from 'react-redux';
import {Route, Redirect, Switch, HashRouter} from 'react-router-dom'; 
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import NavBar from './navbar/navbar';
import Modal from './modal/modal'
import ListingIndexContainer from './listings/listing_index_container';
import PostShowContainer from './listings/listing_show_container';
import Splash from './splash/splash';

const App = () => (
        <div className="yeah">
            <Modal /> 
            <NavBar />  
            <Route exact path="/index" component={ListingIndexContainer} />
            <Route exact path="/listings/:listingId" component={PostShowContainer} />
        </div>

);

export default App;