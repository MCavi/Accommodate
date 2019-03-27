import {connect} from 'react-redux';
import React from 'react'
import {Link} from 'react-router-dom';
import {logout} from '../../actions/session_actions';

const NavBar = (props) => {
    if(!props.id){
        return (
            <div class="link-container">

                <div class="links">
                    <Link to={'/login'} class="li-a">Login</Link>
                </div>
                <div class="links">
                    <Link to={'/signup'} class="li-a">Signup</Link>            
                </div>
                
            </div>
        )
    } else {
        return (
            <div>
                <button onClick={  props.logout}>Log o ut</button>
            </div>
        )

    }
};

const msp = ({ entities, session}) => {
    return {
        id: session.id,
        user: entities.users[session.id]
    }
}

const mdp = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(msp, mdp)(NavBar)