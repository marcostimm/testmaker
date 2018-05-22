import { combineReducers } from 'redux';

import auth       from './reducers/auth';
import exams      from './reducers/exam';
import subjects   from './reducers/subjects';
import alerts     from './reducers/notify';
import entities   from './reducers/entities';
import questions  from './reducers/questions';

export default combineReducers({
  auth,
  exams,
  subjects,
  alerts,
  entities,
  questions
});