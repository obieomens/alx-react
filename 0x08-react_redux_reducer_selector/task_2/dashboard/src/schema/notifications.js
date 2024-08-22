import { normalize } from 'normalizr';
import * as notificationsData from '../../notifications.json';
import { notification } from './notifications';

const normalizedData = normalize(notificationsData.default, [notification]);

export function getAllNotificationsByUser(userId) {
  const { notifications, users, messages } = normalizedData.entities;
  
  return Object.values(notifications).filter((notif) => notif.author === userId).map((notif) => {
    return {
      ...notif,
      author: users[notif.author],
      context: messages[notif.context]
    };
  });
}
