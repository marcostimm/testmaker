import { combineReducers } from 'redux';

import auth       from './reducers/auth';
import exams      from './reducers/exam';
import subjects   from './reducers/subjects';
import alerts     from './reducers/notify';

export default combineReducers({
  auth,
  exams,
  subjects,
  alerts
});