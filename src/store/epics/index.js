import { select, combineEpics } from "redux-most";

import { SHOW_NOTIFICATION_REQUEST } from "../types";
import { showNotification } from "../actions";

function notificationEpic(action$) {
  return action$
    .thru(select(SHOW_NOTIFICATION_REQUEST))
    .filter(({ payload }) => payload == 2)
    .delay(120000)
    .map(showNotification);
}

export default combineEpics([notificationEpic]);
