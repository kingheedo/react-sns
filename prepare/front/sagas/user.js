import {all, fork, put, takeLatest, delay, call } from 'redux-saga/effects'
import axios from 'axios'
import { CHANGE_NICKNAME_FAILURE, CHANGE_NICKNAME_REQUEST, CHANGE_NICKNAME_SUCCESS, FOLLOW_FAILURE, FOLLOW_REQUEST, FOLLOW_SUCCESS, LOAD_FOLLOWERS_FAILURE, LOAD_FOLLOWERS_REQUEST, LOAD_FOLLOWERS_SUCCESS, LOAD_FOLLOWINGS_FAILURE, LOAD_FOLLOWINGS_REQUEST, LOAD_FOLLOWINGS_SUCCESS, LOAD_MY_INFO_FAILURE, LOAD_MY_INFO_REQUEST, LOAD_MY_INFO_SUCCESS, LOAD_USER_FAILURE, LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOG_IN_FAILURE, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_OUT_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, REMOVE_FOLLOWER_FAILURE, REMOVE_FOLLOWER_REQUEST, REMOVE_FOLLOWER_SUCCESS, SIGN_UP_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, UNFOLLOW_FAILURE, UNFOLLOW_REQUEST, UNFOLLOW_SUCCESS } from '../reducers/user';

function loadMyInfoApi(data){
    return axios.get('/user/login');
}   
function* loadMyInfo() {
    try{
    const result = yield call(loadMyInfoApi);
        yield put({
            type: LOAD_MY_INFO_SUCCESS,
            data: result.data,
        })

    }catch(err){
        console.error(err)
        yield put ({
            type: LOAD_MY_INFO_FAILURE,
            error: err.response.data,
        })
    }
}

function loadUserApi(data){
    return axios.get(`/user/${data}`);
}   
function* loadUser(action) {
    try{
    const result = yield call(loadUserApi, action.data);
        yield put({
            type: LOAD_USER_SUCCESS,
            data: result.data,
        })

    }catch(err){
        console.error(err)
        yield put ({
            type: LOAD_USER_FAILURE,
            error: err.response.data,
        })
    }
}

function signupApi(data){
    return axios.post('/user/signUp',data);
}
function* signup(action) {
    try{
    const result = yield call(signupApi, action.data);
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
    return axios.post('/user/login', data);
}
function* logIn(action) {
    try{
    const result = yield call(logInApi, action.data);
        yield put({
            type: LOG_IN_SUCCESS,
            data: result.data,
        })

    }catch(err){
        console.error(err)
        yield put ({
            type: LOG_IN_FAILURE,
            error: err.response.data,
        })
    }
}

function logOutApi() {
        return axios.post('/user/logout');

}
function* logOut(){
    try{
        yield call(logOutApi)
        yield put({
            type:LOG_OUT_SUCCESS
        })
    }catch(err){
        console.error(err)

        yield put({
            type:LOG_OUT_FAILURE,
            error: err.response.data
        })
    }
}

function changeNickNameApi(data){
    return axios.patch('/user/nickname', {nickname: data})
}
function* changeNickName(action){
    try{
    const result = yield call(changeNickNameApi, action.data)
        yield put({
            type: CHANGE_NICKNAME_SUCCESS,
            data: result.data
        })
    }catch(err){
        console.error(err)
        yield put({
            type: CHANGE_NICKNAME_FAILURE, 
            error: err.response.data
        })
    }
}

function followApi(data) {
    return axios.patch(`/user/${data}/follow`)
}
function* follow (action){
    try{
    const result = yield call(followApi, action.data)
        yield put({
            type:FOLLOW_SUCCESS,
            data: result.data
        })
    }catch(err){
        yield put({
            type:FOLLOW_FAILURE,
            error: err.response.data

        })
    }
}

function unfollowApi(data) {
    return axios.delete(`/user/${data}/unfollow`)
}
function* unfollow (action){
    try{
    const result = yield call(unfollowApi, action.data)
        yield put({
            type:UNFOLLOW_SUCCESS,
            data: result.data
        })
    }catch(err){
        yield put({
            type:UNFOLLOW_FAILURE,
            error: err.response.data

        })
    }
}

function loadfollowersApi(data) {
    return axios.get(`/user/followers`)
}
function* loadfollowers (action){
    try{
    const result = yield call(loadfollowersApi, action.data)
        yield put({
            type:LOAD_FOLLOWERS_SUCCESS,
            data: result.data
        })
    }catch(err){
        yield put({
            type:LOAD_FOLLOWERS_FAILURE,
            error: err.response.data

        })
    }
}

function loadfollowingsApi(data) {
    return axios.get(`/user/followings`)
}
function* loadfollowings (action){
    try{
    const result = yield call(loadfollowingsApi, action.data)
        yield put({
            type:LOAD_FOLLOWINGS_SUCCESS,
            data: result.data
        })
    }catch(err){
        yield put({
            type:LOAD_FOLLOWINGS_FAILURE,
            error: err.response.data

        })
    }
}

function removefollowerApi(data) {
    return axios.delete(`/user/follower/${data}`)
}
function* removefollower (action){
    try{
    const result = yield call(removefollowerApi, action.data)
        yield put({
            type:REMOVE_FOLLOWER_SUCCESS,
            data: result.data
        })
    }catch(err){
        yield put({
            type:REMOVE_FOLLOWER_FAILURE,
            error: err.response.data

        })
    }
}



function* watchChangeNickname() {
  yield takeLatest(CHANGE_NICKNAME_REQUEST, changeNickName);
}
function* watchloadMyInfo() {
  yield takeLatest(LOAD_MY_INFO_REQUEST, loadMyInfo);
}
function* watchloadUser() {
  yield takeLatest(LOAD_USER_REQUEST, loadUser);
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
function* watchLoadFollowers() {
  yield takeLatest(LOAD_FOLLOWERS_REQUEST, loadfollowers);
}
function* watchLoadFollowings() {
  yield takeLatest(LOAD_FOLLOWINGS_REQUEST, loadfollowings);
}
function* watchRemoveFollower() {
  yield takeLatest(REMOVE_FOLLOWER_REQUEST, removefollower);
}

export default function* userSaga(){
    yield all([
        fork(watchChangeNickname),
        fork(watchloadMyInfo),
        fork(watchloadUser),
        fork(watchSignUp),
        fork(watchFollow),
        fork(watchLoadFollowers),
        fork(watchLoadFollowings),
        fork(watchUnFollow),
        fork(watchLogIn),
        fork(watchLogOut),
        fork(watchRemoveFollower),
    ])
}