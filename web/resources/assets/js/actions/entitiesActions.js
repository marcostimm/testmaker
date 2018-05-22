import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { GET_ENTITIES, SET_ENTITY, DEL_ENTITIES, DEL_ENTITY } from './types';

export function getEntities(entities, isLoaded) {
  return {
    type: GET_ENTITIES,
    entities,
    isLoaded
  };
}

export function entitiesReload() {
  return dispatch => {
    return axios.get('/api/entities').then(res => {
      dispatch(getEntities(res.data, true));
    });
  }
}

export function entitiesListClear() {
  return dispatch => {
    dispatch(getEntities([], false));
  }
}

export function entitiesList(page = 1) {
  return dispatch => {
    return axios.get('/api/entities?page='+page).then(res => {
      dispatch(getEntities(res.data, true));
    });
  }
}

export function setNewEntity(entity) {
  return {
    type: SET_ENTITY,
    entity
  }
}

export function setEntity(data) {
  return dispatch => {
    return axios.post('/api/entities', {entity: data}).then(res=> {
      dispatch(setNewEntity(res.data))
    });
  }
}

export function setDelEntity(entity) {
  return {
    type: DEL_ENTITY,
    isLoaded: true
  }
}

export function entityDelete(id) {
  return dispatch => {
    return axios.delete('/api/entities/' + id).then(res => {
      dispatch(setDelEntity(res.data));
    });
  }
}