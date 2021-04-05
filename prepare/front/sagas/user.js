import {all, fork, put, takeLatest, delay } from 'redux-saga/effects'
import axios from 'axios'
import { LOG_IN_FAILURE, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_OUT_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS } from '../reducers/user';


function logInApi(data){
    return axios.get('/api/login',data);
}
function* logIn(action) {
    try{
        yield delay(1000);
        yield put({
            type: LOG_IN_SUCCESS,
            data: action.data,
        })

    }catch(err){
        yield put ({
            type: LOG_IN_FAILURE,
            error: err.response.data,
        })
    }
}

function logOutApi() {
    return axios.get('api/logout',data)
}
function* logOut (){
    try{
        yield delay(1000);
        yield put({
            type:LOG_OUT_SUCCESS
        })
    }catch(err){
        yield put({
            type:LOG_OUT_FAILURE
        })
    }
}
function* watchLogIn() {
  yield takeLatest(LOG_IN_REQUEST, logIn);
}
function* watchLogOut() {
  yield takeLatest(LOG_OUT_REQUEST, logOut);
}

export default function* userSaga(){
    yield all([
        fork(watchLogIn),
        fork(watchLogOut),
    ])
}