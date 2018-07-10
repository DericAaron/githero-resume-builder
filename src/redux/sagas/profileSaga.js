import { put, call, takeLatest } from 'redux-saga/effects';
import axios from '../../../node_modules/axios';


function* fetchProfile(action) {
    try {
      const profile = yield call(axios.get, 'api/profile', action.payload);
      yield put({type: 'SET_PROFILE', payload: profile.data});
    } catch (error) {
      console.log('Error in fetchProfileSaga');
    }
  } // end fetch profile

// submit function
function* submitProfile(action) {
  try {
    const profile = yield call(axios.put, `api/profile`, action.payload);
    yield put({type: 'GET_PROFILE'});
  } catch (error) {
    console.log('Error in submitProfileSaga');
  }
} // end submit profile

function* profileSaga() {
  yield takeLatest('SUBMIT_UPDATE', submitProfile);
  yield takeLatest('GET_PROFILE', fetchProfile);
//   yield takeLatest('SUBMIT_UPDATE', submitProfile);
}

export default profileSaga;