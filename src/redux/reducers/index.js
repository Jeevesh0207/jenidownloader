import { combineReducers } from "@reduxjs/toolkit";
import getFetchData from "./FetchData";
import Dowloading from "./Downloading"
import Progress from "./Progress"

const rootReducer = combineReducers({
    getFetchData:getFetchData,
    getDownloadStatus:Dowloading,
    getProgress:Progress
})

export default rootReducer