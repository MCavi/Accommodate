import { connect } from 'react-redux';
import UserShow from './user_show';
import { fetchBookings } from '../../actions/bookings_actions';

const msp = ({entities}, ownProps) => {
    return {
        user: entities.users[ownProps.match.params.userId]
    }
}

const mdp = dispatch => ({
    fetchBookings: () => dispatch(fetchBookings()),
})

export default connect(msp, mdp)(UserShow)