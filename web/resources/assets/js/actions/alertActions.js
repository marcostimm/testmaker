import { ADD_ALERT, REMOVE_ALERT } from './types';

export function setNotify(alertType, headline, message) {
  return {
    type: ADD_ALERT,
    alertType,
    headline,
    message
  };
}

export function removeNotify(alert) {
  return {
    type: REMOVE_ALERT,
    alert
  }
}

export function notify(alertType, headline, message) {
  return dispatch => {
    dispatch(setNotify(alertType, headline, message));
  }
}

export function clearNotify(alert) {
  return dispatch => {
    dispatch(removeNotify(alert));
  }
}