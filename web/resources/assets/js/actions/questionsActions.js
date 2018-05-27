import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { GET_QUESTION_TYPE, SET_QUESTION } from './types';

export function getQuestionsType(questionsType, isLoaded) {
  return {
    type: GET_QUESTION_TYPE,
    questionsType,
    isLoaded
  };
}

export function questionsTypeList() {
  return dispatch => {
    return axios.get('/api/questions-type').then(res => {
      dispatch(getQuestionsType(res.data, true));
    });
  }
};

export function setNewQuestion(question) {
  return {
    type: SET_QUESTION,
    question
  }
}

export function setQuestion(data) {
  return dispatch => {
    return axios.post('/api/questions', data).then(res => {
      dispatch(setNewQuestion(res.data));
    });
  }
}