import { GET_QUESTIONS, GET_QUESTION_TYPE, SET_QUESTION } from '../actions/types';
import isEmpty from 'lodash/isEmpty';

const initialState = {
  questionsType: [],
  questions: {},
  newQuestion: {},
  isLoaded: false,
  success: false
};

export default (state = initialState, action = {}) => {
  switch(action.type) {
    case GET_QUESTION_TYPE:
      return {
        questionsType: action.questionsType
      };
    case GET_QUESTIONS:
      return {
        isLoaded:     action.isLoaded,
        questions:    action.questions
      }
    case SET_QUESTION:
      return {
        success:      action.success,
        newQuestion:  action.question
      }
    default: return state;
  }
}