import * as type from "../types"

export function fetchData(Obj) {
    return {
        type: type.GET_FETCH_REQUESTED,
        payload: Obj
    }
}