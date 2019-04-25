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
                
            </div>
        )
    }
}

export default UserShow;