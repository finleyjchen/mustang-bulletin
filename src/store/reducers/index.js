import { combineReducers } from 'redux';
import sessionReducer from './session';
import userReducer from './user';
import studentReducer from './students';
const rootReducer = combineReducers({
  sessionState: sessionReducer,
  userState: userReducer,
  studentState: studentReducer
});

export default rootReducer;