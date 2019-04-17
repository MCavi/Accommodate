import React from 'react';

class UserShow extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchBookings();
    }

    render(){
        return(
            <div>
                <h1>Bench BnB</h1>
            </div>
        )
    }
}

export default UserShow;