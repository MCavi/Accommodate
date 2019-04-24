import React from 'react';


class ConfirmationModal extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeny = this.handleDeny.bind(this);
    }

    handleDeny(){
        this.props.closeModal();
    }


    render(){

        return (
            <div className="confirmation-modal">

                <div className="confirm-message">
                    <p>Are you sure you want to book this listing?</p>
                </div>

                <div className="confirm-buttons">
                    <p className="confirm-button" style={{ "backgroundColor":"#018489"}}>Confirm</p>
                    <p onClick={this.handleDeny} className="deny-button" style={{ 'backgroundColor':'rgb(255, 90, 95)'}} >Deny</p>
                </div>

            </div>
        )
    }
    
};

export default ConfirmationModal;