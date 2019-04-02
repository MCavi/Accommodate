import React from 'react';
import {Provider} from 'react-redux';
import {Route, Redirect, Switch, HashRouter} from 'react-router-dom'; 
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import NavBar from './navbar/navbar';
import Modal from './modal/modal'
import ListingIndexContainer from './listings/listing_index_container';
import ListingShowContainer from './listing_show/listing_show_container';
import Splash from './splash/splash';
import {AuthRoute} from '../util/route_util';

const App = () => (
        <div className="yeah">
            <Modal /> 
            <AuthRoute exact path="/" component={Splash} />
            <Route exact path="/index" component={ListingIndexContainer} />
            <Route exact path="/listings/:listingId" component={ListingShowContainer} />
        </div>



);

export default App;