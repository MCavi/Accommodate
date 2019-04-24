import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import React from 'react'
import {logout} from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router-dom';


class NavBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dropped: false,
            firstSubmit: false
        };
        this.dropDown = this.dropDown.bind(this) 
        this.unDrop = this.unDrop.bind(this);
        this.geolocate = this.geolocate.bind(this);
    }


    handleChange(){
        this.initAutocomplete();
        console.log(this.autoComplete.getPlace());
        console.log(this.autoComplete);
        this.setState({ firstSubmit: false });
    }

    handleSubmit(e){
        e.preventDefault();
        let place = this.autoComplete.getPlace();
        if (place) {
            while (!place.geometry) {
                console.log(place);
                place = this.autoComplete.getPlace();
            }
            window.map.setCenter(this.autoComplete.getPlace().geometry.location);
            if (this.autoComplete.getPlace() && this.autoComplete.getPlace().geometry) {
            }
        }
    }


    dropDown(){
        this.setState({dropped: true})
    }

    unDrop(){
        this.setState({dropped: false})
    }

    initAutocomplete() {
        this.autoComplete = new google.maps.places.Autocomplete(
            document.getElementById('autocomplete', { types: ['geocode'] }));
    }

    geolocate() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                const autoComplete = new google.maps.places.Autocomplete(
                    document.getElementById('autocomplete', { types: ['geocode'] }));
                let geolocation = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
                let circle = new google.maps.Circle(
                    { center: geolocation, radius: position.coords.accuracy });
                
                autoComplete.setBounds(circle.getBounds());
            });
        }
    }
    

    render(){
        if(!this.props.id){
            return (
                <div className="nav" style={{backgroundColor:"transparent", borderBottom:"0px"}}>
                    <div className="img-container">
                        <img className="logo" src={window.whiteLogo} alt="" />
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
                <div className="nav" 
                    style={{borderBottom: '1px rgb(228, 228, 228) solid'}}
                >
                    <div className="img-container" style={{paddingLeft:"20px"}}>
                        <Link to={'/index'}> 
                            <img className="redLogo" src={window.redLogo} />
                        </Link>
                        <form className="search-field" onSubmit={(e) => this.handleSubmit(e)}>
                            <button type="submit"><i className="fa fa-search"></i></button>
                            <input id="autocomplete" type="text" onFocus={this.geolocate} onChange={this.handleChange.bind(this)} className="controls" placeholder="Try Venice, Los Angeles" />
                        </form>
                        
                    </div>
                    { this.state.dropped ? (<div className="whole-screen" onClick={this.unDrop}></div>) : null }
                    <div className="logged-in-container">
                        <button className="submit-buttons">Become a host</button>
                        <div className="icon-holder" onClick={this.dropDown}>
                            <img className="profile-icon" src={window.defaultThumbnail} alt="" />
                            <div>
                                <ul className={this.state.dropped ? "profile-drop-down" : "hidden"}>
                                    <li className="dropdown-li" ><button className="dropdown-button" onClick={() => this.props.history.push(`/users/${this.props.id}`)}><p>Profile</p></button></li>
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

export default withRouter(connect(msp, mdp)(NavBar));