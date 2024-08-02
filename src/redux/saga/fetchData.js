import { call, put, takeEvery } from 'redux-saga/effects'
import { notify } from '../../constants';
const apiUrl = import.meta.env.VITE_URL + '/api/fetchdata';

async function getApi(Obj) {
    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(Obj),
        });

        const data = await response.json();

        if (!data.ok) {
            throw new Error(`${data.message}`);
        }

        return data;
    } catch (error) {
        throw error;
    }
}

function* fetchData(action) {
    try {
        const Obj = action.payload
        const response = yield call(getApi, Obj);
        notify("Data fetch successfully","success")
        yield put({ type: 'GET_FETCH_SUCCESS', payload: response.data });
    } catch (e) {
        notify(e.message,"error")
        yield put({ type: 'GET_FETCH_FAILED', payload: e.message });
    }
}

function* userSaga() {
    yield takeEvery('GET_FETCH_REQUESTED', fetchData);
}

export default userSaga;