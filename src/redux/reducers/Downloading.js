import * as type from '../types';

const initialState = {
    downloadStatus:false
}

const getDownloadStatus = (state = initialState, action)=>{
    switch (action.type) {
        case type.DOWNLOADING_STATUS:
            return {
                ...state,
                downloadStatus:action.payload
            }
        default:
            return state
    }
}

export default getDownloadStatus