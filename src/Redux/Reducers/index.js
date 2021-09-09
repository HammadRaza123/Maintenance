import Auth from './Auth'
import Notes from './Notes'
import { combineReducers } from 'redux'

export default combineReducers({
    Auth: Auth,
    Notes: Notes
});
