import {all, fork, put, takeLatest, delay, throttle } from 'redux-saga/effects'
import axios from 'axios'
import { ADD_COMMENT_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_POST_FAILURE, ADD_POST_REQUEST, ADD_POST_SUCCESS, generateDummyPost, LOAD_POSTS_FAILURE, LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, REMOVE_POST_FAILURE, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS } from '../reducers/post';
import shortId from 'shortid'
import { REMOVE_POST_OF_ME } from '../reducers/user';



function loadPostsApi() {
    return axios.get('api/loadPost',data)
}
function* loadPosts (action){
    try{
        yield delay(1000);
        yield put({
            type: LOAD_POSTS_SUCCESS,
            data: generateDummyPost(10)
        })
        
    }catch(err){
        yield put({
            type:LOAD_POSTS_FAILURE,
            data: err.response.data
        })
    }
}
function addPostApi() {
    return axios.get('api/addpost',data)
}
function* addPost (action){
    try{
        yield delay(1000);
        const id = shortId.generate();
        yield put({
            type: ADD_POST_SUCCESS,
            data:{
                id,
                content: action.data
            }
        })
        
    }catch(err){
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
        yield delay(1000);
        yield put({
            type: REMOVE_POST_SUCCESS,
            data: action.data
        })
        yield put({
            type: REMOVE_POST_OF_ME,
            data: action.data
        })
        
    }catch(err){
        yield put({
            type:REMOVE_POST_FAILURE,
            data: err.response.data
        })
    }
}
function addCommentApi() {
    return axios.get('api/addcomment',data)
}
function* addComment (action){
    try{
        yield delay(1000);
        yield put({
            type: ADD_COMMENT_SUCCESS,
            data: action.data
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