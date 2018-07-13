import { put, call, takeLatest } from 'redux-saga/effects';
import axios from '../../../node_modules/axios';


function* fetchProject(action) {
    try {
      const project = yield call(axios.get, 'api/project');
      yield put({type: 'SET_PROJECTS', payload: project.data});
    } catch (error) {
      console.log('Error in fetchProjectSaga');
    }
  } // end fetch project

// submit function
function* submitProject(action) {
  try {
    const project = yield call(axios.post, `api/project`, action.payload);
    yield put({type: 'GET_PROJECTS'});
  } catch (error) {
    console.log('Error in submitProjectSaga');
  }
} // end submit project

function* showHideProject(action){
  try {
    const project = yield call(axios.put, `api/project`, action.payload);
    yield put({type: 'GET_PROJECTS'});
  } catch (error) {
    console.log('Error in showHideProjectSaga');
  }
}//end showHideProject

function* removeProject(action){
  try {
    const project = yield call(axios.delete, `api/project/${action.payload}`);
    yield put({type: 'GET_PROJECTS'});
  } catch (error) {
    console.log('Error in removeProjectSaga');
  }
}//end removeProject

function* projectSaga() {
  yield takeLatest('SUBMIT_PROJECT', submitProject);
  yield takeLatest('GET_PROJECTS', fetchProject);
  yield takeLatest('SHOW_HIDE_PROJECT', showHideProject);
  yield takeLatest('DELETE_PROJECT', removeProject);
}

export default projectSaga;