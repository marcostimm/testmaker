import { GET_QUESTION_TYPE } from '../actions/types';
import isEmpty from 'lodash/isEmpty';

const initialState = {
  questionsType: [],
  questions: []
};

export default (state = initialState, action = {}) => {
  switch(action.type) {
    case GET_QUESTION_TYPE:
      return {
        questionsType: action.questionsType
      };
    default: return state;
  }
}