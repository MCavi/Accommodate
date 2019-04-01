import React from 'react'
// import {Link} from 'react-redux-dom';


class ListingShow extends React.Component {
    componentDidMount(){
        this.props.fetchListing(this.props.match.params.listingId)
    }

    // componentDidUpdate(prevProps) {
    //     if(prevProps.listing.id != this.props.match.params.listingId) {
    //         this.props.fetchListing(this.props.match.params.listingId)
    //     }
    // }

  

    render(){
        const {listing} = this.props;
        if(!listing) {
            return <div style={{color:"blue", position:"relative", top:"100px"}}>Loading...</div>;
        }

        return (
            <>
                <div className="show-pictures">
                    <div className="pic-1">
                        <img src={window.brownHouse} />
                    </div>
                    <div className="picture-top-row">
                        <div className="pic-2">
                            <img src={window.brownHouse} />
                        </div>
                        <div className="pic-3">
                            <img src={window.brownHouse} />
                        </div>
                    </div>
                    <div className="picture-bottom-row">
                        <div className="pic-4">
                            <img src={window.brownHouse} />
                        </div>
                        <div className="pic-5">
                            <img src={window.brownHouse}/>
                        </div>
                    </div>
                </div>



                <div className="show">
                    <div className="show-info">
                        <div className="show-title" style={{fontSize:"32", fontWeight:"600"}}>
                            <p>{listing.title}</p>
                        </div>
                        <div className="show-address">
                            <p>{listing.address}</p>
                        </div>
                        <div className="show-capacity">
                            <p>{listing.capacity} Guests</p>
                        </div>
                        <div className="show-description">
                            <p>{listing.description}</p>
                        </div>
                    </div>



                    <div className="show-checkout">
                        <div className="checkout-top">
                            <div className="checkout-rate">
                                <span className="span-rate">${listing.rate}</span>
                                <span className="span-per-night">per night</span>
                            </div>
                            <div className="checkout-review">
                                <p>* * * * * 1 review</p>
                            </div>
                        </div>

                        <div className="checkout-date">
                            <p className="p-dates">Dates</p>
                            <input type="search" className="date-input"/>
                        </div>

                        <div className="chekcout-guests">
                            <label>Guests</label>
                            <select className="num-guests">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                            </select>
                        </div>

                        <button class="checkout-submit">Book</button>

                    </div>
                    
                </div>
            </>
        );
    }
}

export default ListingShow;
