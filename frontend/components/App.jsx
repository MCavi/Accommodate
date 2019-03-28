import React from 'react';
import {Provider} from 'react-redux';
import {Route, Redirect, Switch, HashRouter} from 'react-router-dom'; 
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import NavBar from './navbar/navbar';
import Modal from './modal/modal'


const App = () => (
    <div>
        <Modal /> 
        <header>

            <NavBar />  
        </header>
        {/* <Route path="/login" component={LogInFormContainer}/>
        <Route path="/signup" component={SignUpFormContainer} /> */}
    </div>
);

export default App;