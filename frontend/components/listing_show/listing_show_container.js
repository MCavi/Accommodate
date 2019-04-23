import { connect } from 'react-redux';
import ListingShow from './listing_show';
import { fetchReviews, fetchListing, createReview } from '../../actions/listings_actions';

const msp = (state, ownProps) => {
    const reviews = Object.values(state.entities.reviews);
    return (
        {
        listing: state.entities.listings[ownProps.match.params.listingId] || {}, 
        listingId: ownProps.match.params.listingId,
        reviews
        }
    )
};

const mdp = dispatch => ({
    fetchListing: id => dispatch(fetchListing(id)),
    createReview: review => dispatch(createReview(review)),
    fetchReviews: (id) => dispatch(fetchReviews(id))
});

export default connect(msp, mdp)(ListingShow);
