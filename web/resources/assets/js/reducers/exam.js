import { GET_EXAMS } from '../actions/types';
import isEmpty from 'lodash/isEmpty';

const initialState = {
  isLoaded: false,
  exams: {}
};

export default (state = initialState, action = {}) => {
  switch(action.type) {
    case GET_EXAMS:
      return {
        isLoaded:   action.isLoaded,
        exams:      action.exams
      };
    default: return state;
  }
}