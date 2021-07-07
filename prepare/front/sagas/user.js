import {all, fork, put, takeLatest, delay, call } from 'redux-saga/effects'
import axios from 'axios'
import { FOLLOW_FAILURE, FOLLOW_REQUEST, FOLLOW_SUCCESS, LOG_IN_FAILURE, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_OUT_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, SIGN_UP_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, UNFOLLOW_FAILURE, UNFOLLOW_REQUEST, UNFOLLOW_SUCCESS } from '../reducers/user';


function signupApi(data){
    return axios.post('/user/signUp',data);
}
function* signup(action) {
    const result = yield call(signupApi, action.data);
    try{
        yield put({
            type: SIGN_UP_SUCCESS,
            data: result.data,
        })

    }catch(err){
        console.error(err)
        yield put ({
            type: SIGN_UP_FAILURE,
            error: err.response.data,
        })
    }
}

function logInApi(data){
    return axios.get('/user/login');
}
function* logIn(action) {
    const result = yield call(logInApi, action.data);
    try{
        yield put({
            type: LOG_IN_SUCCESS,
            data: result.data,
        })

    }catch(err){
        yield put ({
            type: LOG_IN_FAILURE,
            error: err.response.data,
        })
    }
}

function logOutApi() {
    return axios.get('api/logout')
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

function followApi() {
    return axios.get('api/follow')
}
function* follow (action){
    try{
        yield put({
            type:FOLLOW_SUCCESS,
            data: action.data
        })
    }catch(err){
        yield put({
            type:UNFOLLOW_FAILURE
        })
    }
}

function unfollowApi() {
    return axios.get('api/unfollow')
}
function* unfollow (action){
    try{
        yield put({
            type:UNFOLLOW_SUCCESS,
            data: action.data
        })
    }catch(err){
        yield put({
            type:UNFOLLOW_FAILURE
        })
    }
}


function* watchLogIn() {
  yield takeLatest(LOG_IN_REQUEST, logIn);
}
function* watchLogOut() {
  yield takeLatest(LOG_OUT_REQUEST, logOut);
}
function* watchSignUp() {
  yield takeLatest(SIGN_UP_REQUEST, signup);
}
function* watchFollow() {
  yield takeLatest(FOLLOW_REQUEST, follow);
}
function* watchUnFollow() {
  yield takeLatest(UNFOLLOW_REQUEST, unfollow);
}

export default function* userSaga(){
    yield all([
        fork(watchSignUp),
        fork(watchFollow),
        fork(watchUnFollow),
        fork(watchLogIn),
        fork(watchLogOut),
    ])
}