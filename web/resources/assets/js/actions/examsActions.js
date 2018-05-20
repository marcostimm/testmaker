import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { GET_EXAMS } from './types';

export function getExams(exams, isLoaded) {
  return {
    type: GET_EXAMS,
    exams,
    isLoaded
  };
}

export function examsListClear() {
  return dispatch => {
    dispatch(getExams([], false));
  }
}

export function examsList(data) {
  return dispatch => {
    return axios.get('/api/exams').then(res => {
      dispatch(getExams(res.data, true));
    });
  }
}