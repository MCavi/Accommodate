import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import merge from 'lodash/merge';

const UsersReducer = (oldState = {}, action) => {
    
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return merge({}, oldState, {[action.currentUser.user.id]: action.currentUser.user});
        default:
            return oldState
    }
};

export default UsersReducer