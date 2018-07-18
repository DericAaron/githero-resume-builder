import { combineReducers } from 'redux';
import user from './userReducer';
import login from './loginReducer';
import profile from './profileReducer';
import project from './projectReducer';
import skill from './skillReducer';

const store = combineReducers({
  user,
  login,
  profile,
  project,
  skill
  
});

export default store;
