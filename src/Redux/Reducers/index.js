import { combineReducers } from 'redux';

import user from './userReducer';
import emailBody from './emailBodyReducer'
// to combine all reducers together
const appReducer = combineReducers({
  user,
  emailBody
});

export default appReducer;