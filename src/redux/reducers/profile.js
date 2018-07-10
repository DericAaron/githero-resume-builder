import { combineReducers } from 'redux';

const profileEdit = (state = {}, action) => {
                        
                        switch (action.type) {
                            case 'UPDATE_PROFILE':
                              return {...state, [action.var]: action.payload};
                            case 'SET_PROFILE':
                                return {...action.payload};
                            default:
                              return state;
                          } 
                        return state;
};

const profileStatic = (state = {}, action) => {
  return state;
};

export default combineReducers({
  profileEdit,
  profileStatic,
});
