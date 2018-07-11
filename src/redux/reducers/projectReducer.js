import { combineReducers } from 'redux';

const project = (state = [], action) => {
                        
                        switch (action.type) {
                            case 'SET_PROJECTS':
                                return [...action.payload];
                            default:
                              return state;
                          } 
                        return state;
};

export default combineReducers({
  project
});