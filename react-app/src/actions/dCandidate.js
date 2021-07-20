import { ACTION_TYPES } from "./action-types"
import api from './api'

export const fetchAll = () => {
    return dispatch => {
        api.dCandidate().fetchAll()
            .then(response => {
                dispatch({
                    type: ACTION_TYPES.FETCH_ALL,
                    payload: response.data
                })
            }).catch(err => {
                console.log(err)
            })

    }
}