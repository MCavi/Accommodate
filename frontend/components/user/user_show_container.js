import { connect } from 'react-redux';
import UserShow from './user_show';
import { fetchBookings } from '../../actions/bookings_actions';
import { fetchReviews } from '../../actions/listings_actions';

const msp = ({entities}, ownProps) => {
    return {
        user: entities.users[ownProps.match.params.userId],
        reviews: entities.reviews,
        bookings: entities.bookings,
    }
}

const mdp = dispatch => ({
    fetchReviews: () => dispatch(fetchReviews()),
    fetchBookings: () => dispatch(fetchBookings()),
})

export default connect(msp, mdp)(UserShow)