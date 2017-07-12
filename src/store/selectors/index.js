import { createSelector } from "reselect";

const notification = state => state.notification;
export const getNotification = createSelector(notification, v => v);
