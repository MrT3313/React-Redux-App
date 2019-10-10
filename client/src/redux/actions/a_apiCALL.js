// IMPORTS
import axios from 'axios'

// CREATE ACTION TYPES
export const API_CALL_START = 'API_CALL_START'
export const API_CALL_SUCCESS = 'API_CALL_SUCCESS'
export const API_CALL_FAILURE = 'API_CALL_FAILURE'


export const a_apiCALL = (symbol = 'AAPL') => {
    console.log('inside apiCALL action creator')
    console.log(symbol)
    // -- // Send First Action
    return dispatch => {
        dispatch({type: API_CALL_START})
        // -- // Send Axios Call
        axios
            .get(`https://financialmodelingprep.com/api/v3/historical-price-full/${symbol}`)
            .then( symbolData => {
                console.log('symbolData', symbolData )
                dispatch({
                    type: API_CALL_SUCCESS,
                    payload: symbolData,
                })
            })
            .catch( err => {
                dispatch({
                    type: API_CALL_FAILURE,
                    payload: err,
                })
            })
    }
}
