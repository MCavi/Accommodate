import React from 'react'
import NavBar from '../navbar/navbar';
import ReviewItem from '../reviews/review_item';
import BookingContainer from './booking_container';



class ListingShow extends React.Component {
    constructor(props) {
        super(props)
        // this.state = this.props.listing.listing
    }

    componentDidMount(){
        this.props.fetchListing(this.props.match.params.listingId)
    }

    componentDidUpdate(prevProps) {
        if(prevProps.listingId != this.props.match.params.listingId) {
            this.props.fetchListing(this.props.match.params.listingId)
        }
    }
 
    

    render(){
        const {listing, reviews} = this.props;
        let listingReviews;
        let ratingTotal = 0;
        let numRating = 0;
        
        // LOL 
        if (listing.listing) {

            listingReviews = listing.listing.reviewIds.map((reviewId) => {
                const review = listing.reviews[reviewId];
                numRating += 1
                ratingTotal += review.rating
                return (
                    <ReviewItem review={review} key={review.id}/> 
                );
            });
        }
        if (this.props.listing.listing) {
            return (
                <>
                    <NavBar />
                    <div className="show-pictures">
                        <div className="pic-1">
                            <img src={window.apartment1} />
                        </div>
                        <div className="picture-top-row">
                            <div className="pic-2">
                                <img src={window.apartment2} />
                            </div>
                            <div className="pic-3">
                                <img src={window.apartment3} />
                            </div>
                        </div>
                        <div className="picture-bottom-row">
                            <div className="pic-4">
                                <img src={window.apartment4} />
                            </div>
                            <div className="pic-5">
                                <img src={window.apartment5} />
                            </div>
                        </div>
                    </div>



                    <div className="show">
                        <div className="show-info">
                            <div className="show-title" style={{ fontSize: "32", fontWeight: "600" }}>
                                <p>{this.props.listing.listing.title}</p>
                            </div>
                            <div className="show-address">
                                <p>{listing.address}</p>
                            </div>

                            <div>
                                <div className="show-capacity">
                                    <div className="listing-type"><i className="fas fa-home"></i><span>{this.props.listing.listing.listing_type}</span></div>
                                    <div className="listing-props">
                                        <div>{this.props.listing.listing.capacity} Guests</div>
                                        <div>{this.props.listing.listing.num_bedroom} bedroom</div>
                                        <div>{this.props.listing.listing.num_bed} bed</div>
                                        <div>{this.props.listing.listing.num_bathroom} bath</div>
                                    </div>
                                </div>
                            </div>

                            <div className="listing-things">
                                <div className="listing-things-top"><i className="fas fa-bell"></i><span>Self check-in</span></div>
                                <div className="listing-things-bottom"><span>Check yourself in with the lockbox.</span></div>
                            </div>

                            <div className="listing-things">
                                <div className="listing-things-top"><i className="fas fa-map-marker-alt"></i><span>Great location</span></div>
                                <div className="listing-things-bottom"><span> 100% of recent guests gave the location a 5-star rating.</span></div>
                            </div>

                            <div className="listing-things">
                                <div className="listing-things-top"><i className="fas fa-key"></i><span>Great check-in experience</span></div>
                                <div className="listing-things-bottom"><span>100% of recent guests gave the check-in process a 5-star</span></div>
                            </div>

                            <div className="shadow-line-1"></div>

                            <div className="show-description">
                                <p>{this.props.listing.listing.description}</p>
                            </div>
                            <div className="shadow-line"></div>

                            <div className="listing-average-review">

                                <div className="all-reviews">{numRating} Reviews</div>

                            
                                <div className="star-ratings-css">
                                    <div className="star-ratings-css-top" style={{ width: `${(ratingTotal / (numRating * 5)) * 100}%` }}><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
                                    <div className="star-ratings-css-bottom"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
                                </div>

                            </div>

                            <div className="shadow-line"></div>

                            <div className="listing-reviews">
                                {listingReviews}
                            </div>

                            <div className="shadow-line"></div>

                        </div>

                        <BookingContainer listing={this.props.listing.listing} />


                    </div>

             

                </>
            );
        } else {
            return <h1></h1>
        }
        
    }
}

export default ListingShow;
