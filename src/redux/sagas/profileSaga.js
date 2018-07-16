import { put, call, takeLatest } from 'redux-saga/effects';
import axios from '../../../node_modules/axios';


function* fetchProfile(action) {
    try {
      const profile = yield call(axios.get, 'api/profile', action.payload);
      yield put({type: 'SET_PROFILE', payload: profile.data});
      yield put({type: 'GET_PROFILE_PIC', payload: profile.data.github_name})
    } catch (error) {
      console.log('Error in fetchProfileSaga');
    }
  } // end fetch profile

// submit function
function* submitProfile(action) {
  try {
    yield call(axios.put, `api/profile`, action.payload);
    yield put({type: 'GET_PROFILE'});
  } catch (error) {
    console.log('Error in submitProfileSaga');
  }
} // end submit profile

function* getProfilePic(action) {
  try {
    const url = `https://api.github.com/users/${action.payload}?access_token=913f20e25e454b699cbf7b4d5f3ae7fd516cafc4`;
    const pic = yield call(axios.get, url);
    yield put({type: 'SET_PROFILE_PIC', payload: pic.data.avatar_url});
  }
  catch (error){
    console.log('Error in getProfilePic Saga');
  }
} // end getProfile Pic

function* profileSaga() {
  yield takeLatest('SUBMIT_UPDATE', submitProfile);
  yield takeLatest('GET_PROFILE', fetchProfile);
  yield takeLatest('GET_PROFILE_PIC', getProfilePic);
//   yield takeLatest('SUBMIT_UPDATE', submitProfile);
}

export default profileSaga;