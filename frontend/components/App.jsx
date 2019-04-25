import React from 'react';
import { Route } from 'react-router-dom'; 
import Modal from './modal/modal'
import ListingIndexContainer from './listings/listing_index_container';
import ListingShowContainer from './listing_show/listing_show_container';
import Splash from './splash/splash';
import UserShowContainer from './user/user_show_container'
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
        <div className="yeah">
            <Modal /> 
            <AuthRoute exact path="/" component={Splash} />

            <ProtectedRoute exact path="/index" component={ListingIndexContainer} />
            <ProtectedRoute exact path="/users/:userId" component={UserShowContainer} />
            <ProtectedRoute exact path="/listings/:listingId" component={ListingShowContainer} />
        </div>



);

export default App;