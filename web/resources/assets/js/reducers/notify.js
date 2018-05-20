import { ADD_ALERT, REMOVE_ALERT } from '../actions/types';

const initialState = {
  alerts: []
};

export default (state = initialState, action = {}) => {
  switch(action.type) {
    case ADD_ALERT:
      const newAlert = {
        id:         (new Date()).getTime()+2,
        type:       action.alertType,
        headline:   action.headline,
        message:    action.message
      };
      return {alerts: [...state.alerts, newAlert]};
      break;
    case REMOVE_ALERT:
      const alerts = state.alerts;
		  const idx = alerts.indexOf(action.alert);
      if (idx >= 0) {
        return {alerts: [...alerts.slice(0, idx), ...alerts.slice(idx + 1)]};
      }
    default: return state;
  }
}