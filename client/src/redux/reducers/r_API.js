// IMPORT ACTION TYPES 
import {
    API_CALL_START,
    API_CALL_SUCCESS,
    API_CALL_FAILURE,
} from '../actions/a_apiCALL.js'


// MAKE INITIAL STATE 
    const initialState = {
        is_fetching: false, 
        error: '',
        apiData: undefined
    }
// REDUCER 
    const r_API = (state = initialState, action) => {
        console.log(state)
        console.log(action)
        console.log(action.payload)
        // -- * -- //
        switch(action.type) {
            case API_CALL_START:
                console.log('starting api call')
                return {
                    ...state,
                    is_fetching: true
                }
            case API_CALL_SUCCESS:
                console.log('api call success')
                return {
                    ...state, 
                    is_fetching: false,
                    error: '',
                    apiData: action.payload.data
                }
            case API_CALL_FAILURE:
                console.log('api call failed')
                return {
                    ...state, 
                    is_fetching: false,
                    error: 'Good LORD What Happened!!'
                }
            default:
                return state
        }
    }
// EXPORTS 
export default r_API