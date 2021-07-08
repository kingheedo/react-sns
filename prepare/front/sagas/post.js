import {all, fork, put, takeLatest, delay, throttle, call } from 'redux-saga/effects'
import axios from 'axios'
import { ADD_COMMENT_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_POST_FAILURE, ADD_POST_REQUEST, ADD_POST_SUCCESS, generateDummyPost, LOAD_POSTS_FAILURE, LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, REMOVE_POST_FAILURE, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS } from '../reducers/post';
import shortId from 'shortid'
import { ADD_POST_TO_ME, REMOVE_POST_OF_ME } from '../reducers/user';



function loadPostsApi() {
    return axios.get('/posts')
}
function* loadPosts (action){
    try{
        const result = yield call(loadPostsApi)
        yield put({
            type: LOAD_POSTS_SUCCESS,
            data: result.data
        })
        
    }catch(err){
        yield put({
            type:LOAD_POSTS_FAILURE,
            data: err.response.data
        })
    }
}
function addPostApi(data) {
    return axios.post('/post/addpost', {content: data})
}
function* addPost (action){

    const result = yield call(addPostApi, action.data)
    try{
        yield put({
            type: ADD_POST_SUCCESS,
            data: result.data
        });
        console.log(result)
        yield put({
            type: ADD_POST_TO_ME,
            data: result.data.id
        })
    }catch(err){
        console.error(err)
        yield put({
            type:ADD_POST_FAILURE,
            data: err.response.data
        })
    }
}

function removePostApi() {
    return axios.get('api/addcomment',data)
}
function* removePost (action){
    try{
        yield put({
            type: REMOVE_POST_SUCCESS,
            data: action.data
        })
        yield put({
            type: REMOVE_POST_OF_ME,
            data: action.data
        })
        
    }catch(err){
        console.error(err)

        yield put({
            type:REMOVE_POST_FAILURE,
            data: err.response.data
        })
    }
}

function addCommentApi(data) {
    return axios.post(`/post/${data.postId}/addcomment`,data)
}
function* addComment (action){
    const result = yield call(addCommentApi, action.data)
    try{
        yield put({
            type: ADD_COMMENT_SUCCESS,
            data: result.data
        })
        
    }catch(err){
        yield put({
            type:ADD_COMMENT_FAILURE,
            data: err.response.data
        })
    }
}
function* watchLoadPosts() {
  yield throttle(2000, LOAD_POSTS_REQUEST, loadPosts);
}
function* watchAddPost() {
  yield takeLatest(ADD_POST_REQUEST, addPost);
}
function* watchRemovePost() {
  yield takeLatest(REMOVE_POST_REQUEST, removePost);
}
function* watchAddComment() {
  yield takeLatest(ADD_COMMENT_REQUEST, addComment);
}

export default function* postSaga(){
    yield all([
        fork(watchLoadPosts),
        fork(watchAddPost),
        fork(watchRemovePost),
        fork(watchAddComment),
    ])
}