import { put, call, takeLatest } from 'redux-saga/effects';
import axios from '../../../node_modules/axios';


function* fetchSkill(action) {
    try {
      const skill = yield call(axios.get, `api/skill/profile/${action.payload}`);
      yield put({type: 'SET_SKILLS', payload: skill.data});
    } catch (error) {
      console.log('Error in fetchProjectSaga');
    }
  } // end fetch project


function* fetchDropSkill(action) {
    try {
      const skill = yield call(axios.get, `api/skill/all`);
      yield put({type: 'SET_DROP_SKILLS', payload: skill.data});
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
      yield call(axios.post, `api/skill/new`, action.payload);
      yield put({type: 'GET_SKILLS'});
    } catch (error) {
      console.log('Error in submitProjectSaga');
    }
  } // end submit project

function* removeSkill(action){
  try {
    yield call(axios.delete, `api/skill/${action.payload}`);
    yield put({type: 'GET_SKILLS'});
  } catch (error) {
    console.log('Error in removeProjectSaga');
  }
}//end removeProject

function* skillSaga() {
  yield takeLatest('SUBMIT_SKILL', submitSkill);
  yield takeLatest('SUBMIT_NEW_SKILL', submitNewSkill);
  yield takeLatest('GET_SKILLS', fetchSkill);
  yield takeLatest('GET_ALL_SKILLS', fetchDropSkill);
  yield takeLatest('DELETE_SKILL', removeSkill);
}

export default skillSaga;