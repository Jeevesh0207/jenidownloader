import * as type from "../types"

export function setProgress(Obj) {
    return {
        type: type.SET_PROGRESS,
        payload: Obj
    }
}