import React from 'react';
import swal from '@sweetalert/with-react';


class ConfirmationModal extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeny = this.handleDeny.bind(this);
        this.handleConfirm = this.handleConfirm.bind(this);
    }

    handleDeny(){
        this.props.closeModal();
    };

    handleConfirm(){
        this.props.closeModal()
        this.props.createBooking(this.props.booking)
            .then(() => this.props.history.push('/index'))
        swal(
            <h1>Booking successful!</h1>,
            {
                icon: "success",
            })
    };


    render(){
        return (
            <div className="confirmation-modal">

                <div className="confirm-message">
                    <p>Are you sure you want to booking this listing?</p>
                </div>

                <div className="confirmation-listing-info">
                    <div>

                    </div>
                </div>

                <div className="confirm-buttons">
                    <p className="confirm-button" style={{ "backgroundColor":"#018489"}} onClick={this.handleConfirm}>Confirm</p>
                    <p onClick={this.handleDeny} className="deny-button" style={{ 'backgroundColor':'rgb(255, 90, 95)'}} >Deny</p>
                </div>

            </div>
        )
    }
    
};

export default ConfirmationModal;