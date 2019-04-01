import { connect } from 'react-redux';
import ListingShow from './listing_show';
import { fetchListing } from '../../actions/listings_actions';

const mapStateToProps = (state, ownProps) => ({
    listing: state.entities.listings[ownProps.match.params.listingId]
});

const mapDispatchToProps = dispatch => ({
    fetchListing: id => dispatch(fetchListing(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListingShow);
