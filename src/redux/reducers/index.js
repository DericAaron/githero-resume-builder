import { combineReducers } from 'redux';
import user from './userReducer';
import login from './loginReducer';
import profile from './profile';

const store = combineReducers({
  user,
  login,
  profile,
  
});

export default store;
