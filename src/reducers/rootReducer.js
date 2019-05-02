import { combineReducers } from 'redux';
import prReducer from './prListReducer';

const appReducer = combineReducers({
    prs:prReducer,
});

const rootReducer = (state, action) => {
   return appReducer(state, action);
};

export default rootReducer;
