import { put, call, takeLatest } from 'redux-saga/effects';
import axios from '../../../node_modules/axios';


function* fetchSkill(action) {
    try {
      const skill = yield call(axios.get, `api/skill/${action.payload}`);
      yield put({type: 'SET_SKILLS', payload: skill.data});
    } catch (error) {
      console.log('Error in fetchProjectSaga');
    }
  } // end fetch project

// submit function
function* submitSkill(action) {
  try {
    yield call(axios.post, `api/skill/existing`, action.payload);
    yield put({type: 'GET_SKILLS'});
  } catch (error) {
    console.log('Error in submitProjectSaga');
  }
} // end submit project

function* submitNewSkill(action) {
    try {
      yield call(axios.post, `api/project/new`, action.payload);
      yield put({type: 'GET_SKILLS'});
    } catch (error) {
      console.log('Error in submitProjectSaga');
    }
  } // end submit project

function* removeSkill(action){
  try {
    yield call(axios.delete, `api/project/${action.payload}`);
    yield put({type: 'GET_SKILLS'});
  } catch (error) {
    console.log('Error in removeProjectSaga');
  }
}//end removeProject

function* skillSaga() {
  yield takeLatest('SUBMIT_SKILL', submitSkill);
  yield takeLatest('SUBMIT_NEW_SKILL', submitNewSkill);
  yield takeLatest('GET_SKILLS', fetchSkill);
  yield takeLatest('DELETE_SKILL', removeSkill);
}

export default skillSaga;