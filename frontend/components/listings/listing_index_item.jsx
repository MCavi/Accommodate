import React from 'react';

class ListingIndexItem extends React.Component {
    constructor(props){
        super(props);
        this.state = this.props.listing;
    }

    render(){

        if (!this.state.title) {
            return <div></div>
        }

        let pics = [
            window.apartment1,
            window.apartment2,
            window.apartment3,
            window.apartment4,
            window.apartment5
        ]
        let random = Math.floor(Math.random() * 4)
        let pic = pics[random];

        return(
            <>
                <div className='grid-item-image-container'>
                    <img className="grid-item-image" src={pic}/>
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