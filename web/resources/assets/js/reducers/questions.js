import { GET_QUESTIONS, GET_QUESTION_TYPE } from '../actions/types';
import isEmpty from 'lodash/isEmpty';

const initialState = {
  questionsType: [],
  questions: {},
  isLoaded: false
};

export default (state = initialState, action = {}) => {
  switch(action.type) {
    case GET_QUESTION_TYPE:
      return {
        questionsType: action.questionsType
      };
    case GET_QUESTIONS:
      return {
        isLoaded:   action.isLoaded,
        questions:  action.questions
      }
    default: return state;
  }
}