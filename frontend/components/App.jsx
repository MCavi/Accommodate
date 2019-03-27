import React from 'react';
import {Provider} from 'react-redux';
import {Route, Redirect, Switch, HashRouter} from 'react-router-dom'; 
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import NavBar from './navbar/navbar';


const App = () => (
    <div>
        <header>
            <div class="img-container">
                <img class="logo" src="https://i.kinja-img.com/gawker-media/image/upload/s--oqmQXcZx--/c_fill,fl_progressive,g_center,h_900,q_80,w_1600/n0uxpip8onijaufkntu9.jpg" alt=""/>
            </div>
            <NavBar />  
        </header>
        <Route path="/login" component={LogInFormContainer}/>
        <Route path="/signup" component={SignUpFormContainer} />
    </div>
);

export default App;