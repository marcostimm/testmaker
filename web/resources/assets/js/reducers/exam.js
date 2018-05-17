import { GET_EXAMS } from '../actions/types';

const initialState = {
  isLoading: false,
  exams: {}
};

export default (state = initialState, action = {}) => {
  switch(action.type) {
    case GET_EXAMS:
      return {
        ...state,
        exams: action.exams
      };
    default: return state;
  }
}