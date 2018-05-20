import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { GET_SUBJECTS, SET_SUBJECT, DEL_SUBJECT } from './types';

export function getSubjects(subjects, isLoaded) {
  return {
    type: GET_SUBJECTS,
    subjects,
    isLoaded
  };
}

export function subjectsReload() {
  return dispatch => {
    return axios.get('/api/categories').then(res => {
      dispatch(getSubjects(res.data, true));
    });
  }
}

export function subjectsListClear() {
  return dispatch => {
    dispatch(getSubjects([], false));
  }
}

export function subjectsList(page = 1) {
  return dispatch => {
    return axios.get('/api/categories?page='+page).then(res => {
      dispatch(getSubjects(res.data, true));
    });
  }
}

export function setNewSubject(subject) {
  return {
    type: SET_SUBJECT,
    subject
  }
}

export function setSubject(data) {
  return dispatch => {
    return axios.post('/api/categories', {subject: data}).then(res=> {
      dispatch(setNewSubject(res.data))
    });
  }
}

export function setDelSubject(sub) {
  return {
    type: DEL_SUBJECT,
    isLoaded: true
  }
}

export function subjectDelete(id) {
  return dispatch => {
    return axios.delete('/api/categories/' + id).then(res => {
      dispatch(setDelSubject(res.data));
    });
  }
}