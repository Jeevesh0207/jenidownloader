import * as type from '../types';

const initialState = {
    currentSize:0,
    totalSize:0
}

const getProgress = (state = initialState, action)=>{
    switch (action.type) {
        case type.SET_PROGRESS:
            return {
                ...state,
                currentSize:action.payload.convertedSize,
                totalSize:action.payload.totalSize
            }
        default:
            return state
    }
}

export default getProgress