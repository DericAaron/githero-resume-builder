import { all } from 'redux-saga/effects';
import userSaga from './userSaga';
import loginSaga from './loginSaga';
import profileSaga from './profileSaga';
import projectSaga from './projectSaga';


export default function* rootSaga() {
  yield all([
    userSaga(),
    loginSaga(),
    profileSaga(),
    // watchIncrementAsync()
  ]);
}
