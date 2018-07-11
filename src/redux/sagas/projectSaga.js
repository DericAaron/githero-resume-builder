import { put, call, takeLatest } from 'redux-saga/effects';
import axios from '../../../node_modules/axios';


function* fetchProject(action) {
    try {
      const project = yield call(axios.get, 'api/project', action.payload);
      yield put({type: 'SET_PROJECTS', payload: project.data});
    } catch (error) {
      console.log('Error in fetchProfileSaga');
    }
  } // end fetch project

// submit function
function* submitProject(action) {
  try {
    const project = yield call(axios.post, `api/project`, action.payload);
    yield put({type: 'GET_PROJECTS'});
  } catch (error) {
    console.log('Error in submitProfileSaga');
  }
} // end submit project

function* projectSaga() {
  yield takeLatest('SUBMIT_PROJECT', submitProject);
  yield takeLatest('GET_PROJECTS', fetchProject);
//   yield takeLatest('SUBMIT_UPDATE', submitProfile);
}

export default projectSaga;