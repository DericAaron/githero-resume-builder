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

const profilePicture = (state = '', action) => {
  switch (action.type) {
    case 'SET_PROFILE_PIC':
      return action.payload;
    default:
      return state;
  } 
};

export default combineReducers({
  profileEdit,
  profilePicture,
});
