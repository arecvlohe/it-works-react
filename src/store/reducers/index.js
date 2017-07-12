import {
  SHOW_NOTIFICATION_REQUEST,
  SHOW_NOTIFICATION,
  HIDE_NOTIFICATION
} from "../types";

import { combineReducers } from "redux";

function notification(state = false, action) {
  switch (action.type) {
    case HIDE_NOTIFICATION: {
      return false;
    }
    case SHOW_NOTIFICATION: {
      return true;
    }
    default: {
      return state;
    }
  }
}

export default combineReducers({
  notification
});
