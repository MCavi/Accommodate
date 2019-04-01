import { combineReducers } from "redux";
import EntitiesReducer from './entities_reducer'
import SessionReducer from './session_reducer'
import ErrorsReducer from './errors_reducer'
import UI from './ui_reducer';

export default combineReducers({
    entities: EntitiesReducer,
    session: SessionReducer,
    errors: ErrorsReducer,
    ui: UI
}) 