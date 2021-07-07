import {all, fork, take, put, takeEvery, takeLatest, delay} from 'redux-saga/effects';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3065';
import userSaga from './user';
import postSaga from './post'
export default function* rootSaga() {
    yield all ([
        fork(userSaga),
        fork(postSaga),
    ])
}