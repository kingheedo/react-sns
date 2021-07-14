import {all, fork, put, takeLatest, delay, throttle, call } from 'redux-saga/effects'
import axios from 'axios'
import { ADD_COMMENT_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_POST_FAILURE, ADD_POST_REQUEST, ADD_POST_SUCCESS, generateDummyPost, LIKE_POST_FAILURE, LIKE_POST_REQUEST, LIKE_POST_SUCCESS, LOAD_POSTS_FAILURE, LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, REMOVE_POST_FAILURE, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, UNLIKE_POST_FAILURE, UNLIKE_POST_REQUEST, UNLIKE_POST_SUCCESS, UPLOAD_IMAGES_FAILURE, UPLOAD_IMAGES_REQUEST, UPLOAD_IMAGES_SUCCESS } from '../reducers/post';
import shortId from 'shortid'
import { ADD_POST_TO_ME, REMOVE_POST_OF_ME } from '../reducers/user';



function loadPostsApi() {
    return axios.get('/posts')
}
function* loadPosts (){
    try{
        const result = yield call(loadPostsApi)
        yield put({
            type: LOAD_POSTS_SUCCESS,
            data: result.data
        })
        
    }catch(err){
        yield put({
            type:LOAD_POSTS_FAILURE,
            error: err.response.data
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
            error: err.response.data
        })
    }
}

function removePostApi(data) {
    return axios.delete(`/post/${data}/remove`)
}
function* removePost (action){
    const result = yield call(removePostApi, action.data)
    try{
        yield put({
            type: REMOVE_POST_SUCCESS,
            data: result.data
        })
        yield put({
            type: REMOVE_POST_OF_ME,
            data: result.data
        })
        
    }catch(err){
        console.error(err)
        yield put({
            type:REMOVE_POST_FAILURE,
            error: err.response.data
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
function likePostApi(data) {
    return axios.patch(`/post/${data}/like`)
}
function* likePost (action){
    const result = yield call(likePostApi, action.data)
    try{
        yield put({
            type: LIKE_POST_SUCCESS,
            data: result.data
        })
        
    }catch(err){
        console.error(err);
        yield put({
            type: LIKE_POST_FAILURE,
            data: err.response.data
        })
    }
}

function unlikePostAPI(data) {
  return axios.delete(`/post/${data}/unlike`); //patch 게시글의 일부분을 수정
}

function* unlikePost(action) {
  try {
    const result = yield call(unlikePostAPI, action.data);
    yield put({
      type: UNLIKE_POST_SUCCESS,
      data: result.data,
    });
  } catch (err) {
      console.error(err)
    yield put({
      type: UNLIKE_POST_FAILURE,
      error: err.response.data,
    });
  }
}

function uploadImagesAPI(data) {
  return axios.post(`/post/images`, data); //patch 게시글의 일부분을 수정
}

function* uploadImages(action) {
  try {
    const result = yield call(uploadImagesAPI, action.data);
    yield put({
      type: UPLOAD_IMAGES_SUCCESS,
      data: result.data,
    });
  } catch (err) {
      console.error(err)
    yield put({
      type: UPLOAD_IMAGES_FAILURE,
      error: err.response.data,
    });
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
function* watchLikePost() {
  yield takeLatest(LIKE_POST_REQUEST, likePost);
}
function* watchUnLikePost() {
  yield takeLatest(UNLIKE_POST_REQUEST, unlikePost);
}
function* watchUploadImages() {
  yield takeLatest(UPLOAD_IMAGES_REQUEST, uploadImages);
}

export default function* postSaga(){
    yield all([
        fork(watchLoadPosts),
        fork(watchAddPost),
        fork(watchRemovePost),
        fork(watchAddComment),
        fork(watchLikePost),
        fork(watchUnLikePost),
        fork(watchUploadImages),
    ])
}