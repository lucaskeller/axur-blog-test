import { all, fork, call, put, takeLatest } from 'redux-saga/effects'

import { constants } from '../modules/blog'
import * as api from '../api/blog'

function* fetchPosts(action) {
  try {
    const payload = yield call(api.fetchPosts)
    yield put({ type: constants.BLOG_FETCH_POSTS.SUCCESS, payload })
  } catch (e) {
    yield put({
      type: constants.BLOG_FETCH_POSTS.FAILED,
      error: e.message || e
    })
  }
}

function* fetchAuthors(action) {
  try {
    const payload = yield call(api.fetchAuthors)
    yield put({ type: constants.BLOG_FETCH_AUTHORS.SUCCESS, payload })
  } catch (e) {
    yield put({
      type: constants.BLOG_FETCH_AUTHORS.FAILED,
      error: e.message || e
    })
  }
}

/**
 * Saga
 */
function* watchFetchPosts() {
  yield takeLatest(constants.BLOG_FETCH_POSTS.ACTION, fetchPosts)
}

function* watchFetchAuthors() {
  yield takeLatest(constants.BLOG_FETCH_AUTHORS.ACTION, fetchAuthors)
}

/**
 * Export the root saga by forking all available sagas.
 */
export function* rootSaga() {
  // add more sagas here
  yield all([fork(watchFetchPosts), fork(watchFetchAuthors)])
}
