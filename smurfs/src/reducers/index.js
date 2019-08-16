import {FETCH_SMURFS_START,
    FETCH_SMURFS_SUCCESS ,
    FETCH_SMURFS_FAILURE} from '../actions'

const initialState = {
smurfs: {},
error: '',
loading: false
}

const reducer = (state=initialState, action) => {
   
    switch(action.type) {
        case FETCH_SMURFS_START:
            return {
                ...state,
                error: '',
                loading: true
            }
            case FETCH_SMURFS_SUCCESS:
            return {
                ...state,
                error: '',
                loading: false,
                smurfs: action.payload
            }
            case FETCH_SMURFS_FAILURE:
                    return {
                        ...state,
                        error: action.payload,
                        loading: false,
                        smurfs: null
                    }
        default:
            return state
    }
}

export default reducer