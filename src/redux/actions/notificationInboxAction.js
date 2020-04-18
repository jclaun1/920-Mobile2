import {
  NOTIFICATIONS,
  NOTIFICATION_PUSH,
  NOTIFICATION_INC_DEC,
  NOTIFICATION_COUNT,
  INBOXES,
  INBOX_PUSH,
  INBOX_COUNT,
  INBOX_INC_DEC,
} from './types';

export const notifications = notificationsData => ({
  type: NOTIFICATIONS,
  payload: notificationsData,
});

export const newNotification = notification => ({
  type: NOTIFICATION_PUSH,
  payload: notification,
});

export const notificationIncDec = type => ({
  type: NOTIFICATION_INC_DEC,
  payload: type,
});

export const notificationCount = notifications => ({
  type: NOTIFICATION_COUNT,
  payload: notifications,
});

export const inboxes = inboxesData => ({
  type: INBOXES,
  payload: inboxesData,
});

export const newInbox = inbox => ({
  type: INBOX_PUSH,
  payload: inbox,
});

export const inboxIncDec = type => ({
  type: INBOX_INC_DEC,
  payload: type,
});

export const inboxCount = inboxes => ({
  type: INBOX_COUNT,
  payload: inboxes,
});
