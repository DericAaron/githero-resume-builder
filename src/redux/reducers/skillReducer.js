import { combineReducers } from 'redux';

const skill = (state = [{skill: 'React'}, {skill: 'Redux'}], action) => {
                        
                        switch (action.type) {
                            case 'SET_SKILLS':
                                return [...action.payload];
                            default:
                              return state;
                          } 
};

export default combineReducers({
  skill
});