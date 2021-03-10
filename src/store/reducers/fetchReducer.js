import { FETCH_DATA_BEGIN, FETCH_DATA_SUCCESS, FETCH_DATA_FAILED } from '../actions'

const fetchReducer = (state = {loading: false, data: {}, error: null}, action) => {
    // console.log('reducer中的state', state)
    switch (action.type) {
        case FETCH_DATA_BEGIN:
            return {
                ...state,
                loading: true,
                error: null   
            };
        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload
            };
        case FETCH_DATA_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
    
        default:
            return state;
    }

}

export default fetchReducer;