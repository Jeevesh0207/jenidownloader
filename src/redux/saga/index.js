import { all } from "redux-saga/effects";
import fetchData from "./fetchData"
function* rootSaga() {
    yield all([
        fetchData()
    ])
}

export default rootSaga