import * as type from "../types"

export function downloadStatus(Obj) {
    return {
        type: type.DOWNLOADING_STATUS,
        payload: Obj
    }
}