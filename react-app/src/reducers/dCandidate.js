import { ACTION_TYPES } from '../actions/action-types'

const initialState = {
    list:[]
}

export const dCandidate = (state=initialState, action) => {
    switch (action) {
        case ACTION_TYPES.FETCH_ALL:
            return {
                ...state,
                list:[...action.payload]
            }
    
        default:
            return state;
    }
}