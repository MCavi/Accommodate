import React from 'react';
import {connect} from 'react-router-dom';

class ListingIndexItem extends React.Component {
    constructor(props){
        super(props);
        this.state = this.props.listing
    }

    render(){

        // const beds = if(this.state.num_bed > 1){
        //     return "BEDS"
        // } else {
        //     return "BED"
        // }

        return(
            <>

                <div className="grid-item-image-container" style={{ backgroundImage: `url('${window.brownHouse}')` }}>
                </div>

                <div className="info-container">

                    <div className="top-text">
                        <span className="small-description">ENTIRE HOUSE</span>
                        <span className="num-beds">{this.state.num_bed} BEDS</span>
                    </div>

                    <div className="rate-text">
                        <span className="rate">${this.state.rate} per night</span>
                        <span className="cancellation">Free cancellation</span>
                    </div>

                    <div className="review-text">
                        <span className="star-review">***</span>
                        <span className="num-reviews">1</span>
                    </div>

                </div>

            </>
        )
    }

}

export default ListingIndexItem;