import SessionErrorsReducer from './session_errors_reducer';
import { combineReducers } from 'redux';

const errorsReducer = combineReducers({
    session: SessionErrorsReducer
});

export default errorsReducer;