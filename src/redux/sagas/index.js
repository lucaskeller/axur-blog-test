import { all, fork } from 'redux-saga/effects'

import { rootSaga as blogContainer } from './blog'

function* rootSaga() {
  yield all([fork(blogContainer)])
}

export default rootSaga
