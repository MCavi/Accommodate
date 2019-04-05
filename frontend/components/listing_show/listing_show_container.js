import { connect } from 'react-redux';
import ListingShow from './listing_show';
import { fetchListing } from '../../actions/listings_actions';
import { fetchReviews} from '../../actions/listings_actions'

const mapStateToProps = (state, ownProps) => {
    return (
        {listing: state.entities.listings[ownProps.match.params.listingId] || {}}
    )
};

const mapDispatchToProps = dispatch => ({
    fetchListing: id => dispatch(fetchListing(id)),
    // fetchReviews: 
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListingShow);
