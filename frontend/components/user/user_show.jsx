import React from 'react';
import {Link} from 'react-router-dom';

class UserShow extends React.Component {
    constructor(props){
        super(props)
        debugger
    }

    componentDidMount(){
        debugger
        this.props.fetchBookings();
    }

    render(){
        debugger
        return(
            <div>
                <h1>Bench BnB</h1>
            </div>
        )
    }
}

export default UserShow;