import { combineReducers } from 'redux';
import user from './userReducer';
import login from './loginReducer';
import profile from './profileReducer';
import project from './projectReducer';

const store = combineReducers({
  user,
  login,
  profile,
  project,
  
});

export default store;
