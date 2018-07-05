import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { GET_QUESTION_TYPE, SET_QUESTION, GET_QUESTIONS } from './types';

export function getQuestions(questions, isLoaded) {
  return {
    type: GET_QUESTIONS,
    questions,
    isLoaded
  };
}

export function getQuestionsType(questionsType, isLoaded) {
  return {
    type: GET_QUESTION_TYPE,
    questionsType,
    isLoaded
  };
}

export function questionList(data) {
  return dispatch => {
    return axios.get('/api/questions').then(res => {
      dispatch(getQuestions(res.data, true));
    });
  }
}

export function questionsListClear() {
  return dispatch => {
    dispatch(getQuestions({}, false));
  }
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