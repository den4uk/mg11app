import { ACTIONS } from '../actions'

export default function(state={}, action) {
    switch (action.type) {
        case ACTIONS.UPDATE_VALUE:
            return {...state, ...action.payload}
        case ACTIONS.CLEAR_ALL:
            return {}
        default:
            return state
    }
}