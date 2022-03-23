import { all, fork, put, takeLatest, throttle, call } from 'redux-saga/effects';
import axios from 'axios';
import { ADD_BOOKMARK_FAILURE, ADD_BOOKMARK_REQUEST, ADD_BOOKMARK_SUCCESS, ADD_COMMENT_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_POST_FAILURE, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_REPORT_FAILURE, ADD_REPORT_REQUEST, ADD_REPORT_SUCCESS, DELETE_POST_IMAGE_FAILURE, DELETE_POST_IMAGE_REQUEST, DELETE_POST_IMAGE_SUCCESS, EDIT_POST_CONTENT_FAILURE, EDIT_POST_CONTENT_REQUEST, EDIT_POST_CONTENT_SUCCESS, LIKE_POST_FAILURE, LIKE_POST_REQUEST, LIKE_POST_SUCCESS, LOAD_HASHTAG_POSTS_FAILURE, LOAD_HASHTAG_POSTS_REQUEST, LOAD_HASHTAG_POSTS_SUCCESS, LOAD_POSTS_FAILURE, LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, LOAD_POST_FAILURE, LOAD_POST_REQUEST, LOAD_POST_SUCCESS, REMOVE_BOOKMARK_FAILURE, REMOVE_BOOKMARK_REQUEST, REMOVE_BOOKMARK_SUCCESS, REMOVE_POST_FAILURE, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, RETWEET_FAILURE, RETWEET_REQUEST, RETWEET_SUCCESS, UNLIKE_POST_FAILURE, UNLIKE_POST_REQUEST, UNLIKE_POST_SUCCESS, UPLOAD_IMAGES_FAILURE, UPLOAD_IMAGES_REQUEST, UPLOAD_IMAGES_SUCCESS } from '../reducers/post';
import { ADD_POST_TO_ME, REMOVE_POST_OF_ME } from '../reducers/user';

function AddReportApi(data) {
    return axios.post(`/post/${data.postId}/report`, data);
}
function* AddReport(action) {
    try {
        const result = yield call(AddReportApi, action.data);
        yield put({
            type: ADD_REPORT_SUCCESS,
            data: result.data,
        });
    } catch (err) {
      console.error(err);
        yield put({
            type: ADD_REPORT_FAILURE,
            error: err.response.data,
        });
    }
}

function DeltePostImageApi(data) {
    return axios.delete(`/post/${data.postId}/image/${data.imageId}`, data);
}
function* DeltePostImage(action) {
    try {
        const result = yield call(DeltePostImageApi, action.data);
        yield put({
            type: DELETE_POST_IMAGE_SUCCESS,
            data: result.data,
        });
    } catch (err) {
      console.error(err);
        yield put({
            type: DELETE_POST_IMAGE_FAILURE,
            error: err.response.data,
        });
    }
}

function EditPostContentApi(data) {
    return axios.patch(`/post/${data.postId}`, data);
}
function* EditPostContent(action) {
    try {
        const result = yield call(EditPostContentApi, action.data);
        yield put({
            type: EDIT_POST_CONTENT_SUCCESS,
            data: result.data,
        });
    } catch (err) {
      console.error(err);
        yield put({
            type: EDIT_POST_CONTENT_FAILURE,
            error: err.response.data,
        });
    }
}

function loadHashtagPostsApi(data, lastId) {
    return axios.get(`/hashtag/${encodeURIComponent(data)}?lastId=${lastId || 0}`);
}
function* loadHashtagPosts(action) {
    try {
        const result = yield call(loadHashtagPostsApi, action.data, action.lastId);
        yield put({
            type: LOAD_HASHTAG_POSTS_SUCCESS,
            data: result.data,
        });
    } catch (err) {
      console.error(err);
        yield put({
            type: LOAD_HASHTAG_POSTS_FAILURE,
            error: err.response.data,
        });
    }
}

function loadPostApi(data) {
    return axios.get(`/post/${data}`);
}
function* loadPost(action) {
    try {
        const result = yield call(loadPostApi, action.data);
        yield put({
            type: LOAD_POST_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        yield put({
            type: LOAD_POST_FAILURE,
            error: err.response.data,
        });
    }
}

function loadPostsApi(lastId) {
    return axios.get(`/posts?lastId=${lastId || 0}`);
}
function* loadPosts(action) {
    try {
        const result = yield call(loadPostsApi, action.lastId);
        yield put({
            type: LOAD_POSTS_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        yield put({
            type: LOAD_POSTS_FAILURE,
            error: err.response.data,
        });
    }
}

function addPostApi(data) {
    return axios.post('/post', data);
}
function* addPost(action) {
    try {
    const result = yield call(addPostApi, action.data);
        yield put({
            type: ADD_POST_SUCCESS,
            data: result.data,
        });
        yield put({
            type: ADD_POST_TO_ME,
            data: result.data.id,
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: ADD_POST_FAILURE,
            error: err.response.data,
        });
    }
}

function removePostApi(data) {
    return axios.delete(`/post/${data}/remove`);
}
function* removePost(action) {
    try {
    const result = yield call(removePostApi, action.data);

        yield put({
            type: REMOVE_POST_SUCCESS,
            data: result.data,
        });
        yield put({
            type: REMOVE_POST_OF_ME,
            data: result.data,
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: REMOVE_POST_FAILURE,
            error: err.response.data,
        });
    }
}

function addCommentApi(data) {
    return axios.post(`/post/${data.postId}/comment`, data);
}
function* addComment(action) {
    try {
    const result = yield call(addCommentApi, action.data);

        yield put({
            type: ADD_COMMENT_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        yield put({
            type: ADD_COMMENT_FAILURE,
            data: err.response.data,
        });
    }
}

function addBookMarkApi(data) {
    return axios.patch(`/post/${data}/bookmark`);
}
function* addBookMark(action) {
    try {
    const result = yield call(addBookMarkApi, action.data);

        yield put({
            type: ADD_BOOKMARK_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: ADD_BOOKMARK_FAILURE,
            data: err.response.data,
        });
    }
}

function removeBookMarkApi(data) {
    return axios.patch(`/post/${data}/unbookmark`);
}
function* removeBookMark(action) {
    try {
    const result = yield call(removeBookMarkApi, action.data);

        yield put({
            type: REMOVE_BOOKMARK_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: REMOVE_BOOKMARK_FAILURE,
            data: err.response.data,
        });
    }
}
function likePostApi(data) {
    return axios.patch(`/post/${data}/like`);
}
function* likePost(action) {
    try {
    const result = yield call(likePostApi, action.data);

        yield put({
            type: LIKE_POST_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: LIKE_POST_FAILURE,
            data: err.response.data,
        });
    }
}

function unlikePostAPI(data) {
  return axios.delete(`/post/${data}/unlike`);
}

function* unlikePost(action) {
  try {
    const result = yield call(unlikePostAPI, action.data);
    yield put({
      type: UNLIKE_POST_SUCCESS,
      data: result.data,
    });
  } catch (err) {
      console.error(err);
    yield put({
      type: UNLIKE_POST_FAILURE,
      error: err.response.data,
    });
  }
}

function uploadImagesAPI(data) {
  return axios.post('/post/images', data);
}

function* uploadImages(action) {
  try {
    const result = yield call(uploadImagesAPI, action.data);
    yield put({
      type: UPLOAD_IMAGES_SUCCESS,
      data: result.data,
    });
  } catch (err) {
      console.error(err);
    yield put({
      type: UPLOAD_IMAGES_FAILURE,
      error: err.response.data,
    });
  }
}

function retweetAPI(data) {
  return axios.post(`/post/${data}/retweet`, data);
}

function* retweet(action) {
  try {
    const result = yield call(retweetAPI, action.data);
    yield put({
      type: RETWEET_SUCCESS,
      data: result.data,
    });
  } catch (err) {
      console.error(err);
    yield put({
      type: RETWEET_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchAddReport() {
  yield takeLatest(ADD_REPORT_REQUEST, AddReport);
}
function* watchDeltePostImage() {
  yield throttle(3000, DELETE_POST_IMAGE_REQUEST, DeltePostImage);
}
function* watchEditPostContent() {
  yield throttle(2000, EDIT_POST_CONTENT_REQUEST, EditPostContent);
}
function* watchLoadHashtagPosts() {
  yield throttle(2000, LOAD_HASHTAG_POSTS_REQUEST, loadHashtagPosts);
}
function* watchRemoveBookmark() {
  yield takeLatest(REMOVE_BOOKMARK_REQUEST, removeBookMark);
}
function* watchAddBookmark() {
  yield takeLatest(ADD_BOOKMARK_REQUEST, addBookMark);
}
function* watchLoadPost() {
  yield throttle(2000, LOAD_POST_REQUEST, loadPost);
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
function* watchRetweet() {
  yield takeLatest(RETWEET_REQUEST, retweet);
}

export default function* postSaga() {
    yield all([
        fork(watchAddReport),
        fork(watchDeltePostImage),
        fork(watchEditPostContent),
        fork(watchRemoveBookmark),
        fork(watchAddBookmark),
        fork(watchLoadHashtagPosts),
        fork(watchLoadPost),
        fork(watchLoadPosts),
        fork(watchAddPost),
        fork(watchRemovePost),
        fork(watchAddComment),
        fork(watchLikePost),
        fork(watchUnLikePost),
        fork(watchUploadImages),
        fork(watchRetweet),
    ]);
}
