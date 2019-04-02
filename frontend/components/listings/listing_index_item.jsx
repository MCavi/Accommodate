import React from 'react';
import {connect} from 'react-router-dom';

class ListingIndexItem extends React.Component {
    constructor(props){
        super(props);
        this.state = this.props.listing
    }

    render(){

        return(
            <>

                <div className="grid-item-image-container" style={{ backgroundImage: `url('${window.brownHouse}')` }}>
                    <div className="arrow-container">
                        <div className="arrows" onClick={this.handleLeft}><i class="fas fa-angle-left"></i></div>
                        <div className="arrows" onClick={this.handleRight}><i class="fas fa-angle-right"></i></div>
                    </div>
                </div>

                <div className="info-container">

                    <div className="top-text">
                        <div>ENTIRE HOUSE · {this.state.num_bed} BEDS</div>
                    </div>

                    <div className="title-span">
                        <span>{this.state.title.slice(0,40)}...</span>
                    </div>

                    <div className="rate-text">
                        <div>${this.state.rate} per night · Free cancellation</div>
                    </div>

                    <div className="review-section">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>

                </div>

            </>
        )
    }

}

export default ListingIndexItem;