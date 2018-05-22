import { GET_ENTITIES, DEL_ENTITY } from '../actions/types';
import isEmpty from 'lodash/isEmpty';

const initialState = {
  isLoaded: false,
  entities: {}
};

export default (state = initialState, action = {}) => {
  switch(action.type) {
    case GET_ENTITIES:
      return {
        isLoaded:   action.isLoaded,
        entities:   action.entities
    };
    case DEL_ENTITY:
      return {
        isLoaded:   true,
        entities:   state.entities
    }
    default: return state;
  }
}