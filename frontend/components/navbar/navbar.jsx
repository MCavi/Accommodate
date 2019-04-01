import {connect} from 'react-redux';
import React from 'react'
import {Link} from 'react-router-dom';
import {logout} from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';

class NavBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {dropped: false};
        this.dropDown = this.dropDown.bind(this) 
        this.unDrop = this.unDrop.bind(this) 
    }


    dropDown(){
        this.setState({dropped: true})
    }

    unDrop(){
        this.setState({dropped: false})
    }

    render(){
        
        if(!this.props.id){
            return (
                <div className="nav">
                    <div className="img-container">
                        <img className="logo" src={window.redLogo} alt="" />
                    </div>
                    <div className="link-container">
                        <div className="links">
                            <button className="submit-buttons" onClick={()=>this.props.openModal("Login")}>Log In</button>
                        </div>
                        <div className="links">
                            <button className="submit-buttons" onClick={() => this.props.openModal("Signup")}>Sign Up</button>           
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="nav" style={{
                    borderBottom: '1px rgb(228, 228, 228) solid'}}>
                    <div className="img-container">
                        <img className="logo" src={window.redLogo} alt="" />
                    </div>
                    { this.state.dropped ? (<div className="whole-screen" onClick={this.unDrop}></div>) : null }
                    <div className="logged-in-container">
                        <button className="submit-buttons">Become a host</button>
                        <div className="icon-holder" onClick={this.dropDown}>
                            <img className="profile-icon" src={window.defaultThumbnail} alt="" />
                            <div>
                                <ul className={this.state.dropped ? "profile-drop-down" : "hidden"}>
                                    <li className="dropdown-li" ><button className="dropdown-button"><p>Profile</p></button></li>
                                    <li className="dropdown-li" onClick={this.props.logout} ><button className="dropdown-button"><p>Log Out</p></button></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
};

const msp = ({ entities, session}) => {
    return {
        id: session.id,
        user: entities.users[session.id]
    }
}

const mdp = dispatch => ({
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal))
});

export default connect(msp, mdp)(NavBar)