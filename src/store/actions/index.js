import {
  SHOW_NOTIFICATION_REQUEST,
  SHOW_NOTIFICATION,
  HIDE_NOTIFICATION
} from "../types";

export const showNotificationRequest = id => ({
  type: SHOW_NOTIFICATION_REQUEST,
  payload: id
});

export const showNotification = () => ({
  type: SHOW_NOTIFICATION
});

export const hideNotification = () => ({
  type: HIDE_NOTIFICATION
});
