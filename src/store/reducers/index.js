import { combineReducers } from 'redux';
import sessionReducer from './session';
import userReducer from './user';
import studentReducer from './students';
import jobsReducer from './jobs';
const rootReducer = combineReducers({
  sessionState: sessionReducer,
  userState: userReducer,
  studentState: studentReducer,
  jobsState: jobsReducer, 
});

export default rootReducer;