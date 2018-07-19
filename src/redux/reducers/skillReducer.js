import { combineReducers } from 'redux';

const skill = (state = [], action) => {
                        
                        switch (action.type) {
                            case 'SET_SKILLS':
                                return [...action.payload];
                            default:
                              return state;
                          } 
};

const skillSelect = (state = [], action) => {
                        
    switch (action.type) {
        case 'SET_DROP_SKILLS':
            return [...action.payload];
        default:
          return state;
      } 
};

export default combineReducers({
  skill,
  skillSelect,
});