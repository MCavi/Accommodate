import React from 'react';

class ListingIndexItem extends React.Component {
    constructor(props){
        super(props);
        this.state = this.props.listing;
        this.pics = ['grid-item-image-container1', 'grid-item-image-container2', 'grid-item-image-container3', 'grid-item-image-container4', 'grid-item-image-container5']
        this.random = Math.floor(Math.random() * 4)
        this.pic = this.pics[this.random];
    }

    render(){

        if (!this.state.title) {
            return <div></div>
        }

        return(
            <>
                <div className={this.pic}>
                    <div className="arrow-container">
                        <div className="arrows" onClick={this.handleLeft}><i className="fas fa-angle-left"></i></div>
                        <div className="arrows" onClick={this.handleRight}><i className="fas fa-angle-right"></i></div>
                    </div>
                </div>

                <div className="info-container">

                    <div className="top-text">
                        <div>{this.state.listing_type.toUpperCase()} · {this.state.num_bed} BEDS</div>
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