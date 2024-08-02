import * as type from '../types';

const initialState = {
    loading: false,
    error: null,
    data: [],
}

const getFetchData = (state = initialState, action)=>{
    switch (action.type) {
        case type.GET_FETCH_REQUESTED:
            return {
                ...state,
                loading:true,
                error:null,
                data:[]
            }
        case type.GET_FETCH_SUCCESS:
            return {
                ...state,
                loading:false,
                error:null,
                data:action.payload
            }
        case type.GET_FETCH_FAILED:
            return {
                ...state,
                loading:false,
                error:action.payload,
                data:[]
            }
        default:
            return state
    }
}

export default getFetchData