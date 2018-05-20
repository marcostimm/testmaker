import { GET_SUBJECTS, DEL_SUBJECT } from '../actions/types';
import isEmpty from 'lodash/isEmpty';

const initialState = {
  isLoaded: false,
  subjects: {}
};

export default (state = initialState, action = {}) => {
  switch(action.type) {
    case GET_SUBJECTS:
      return {
        isLoaded:   action.isLoaded,
        subjects:   action.subjects
      };
    case DEL_SUBJECT:
      return {
        isLoaded:   true,
        subjects:   state.subjects
      }
    default: return state;
  }
}