import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { GET_EXAMS } from './types';

export function getExams(exams) {
  console.log(exams)
  return {
    type: GET_EXAMS,
    exams
  };
}

export function examsList(data) {
  return dispatch => {
    return axios.get('/api/exams').then(res => {
      dispatch(getExams(res.data));
    });
  }
}