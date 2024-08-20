// schema/notifications.test.js

import { getAllNotificationsByUser } from './notifications';

describe('getAllNotificationsByUser', () => {
  it('should return notifications for user with id 5debd764a7c57c7839d722e9', () => {
    const userId = '5debd764a7c57c7839d722e9';
    const expectedNotifications = [
      {
        guid: 'efb6c485-00f7-4fdf-97cc-5e12d14d6c41',
        isRead: true,
        type: 'urgent',
        value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
      },
      {
        guid: 'e3eb2c67-7b3e-468c-ae4f-9feca29b9fc9',
        isRead: false,
        type: 'urgent',
        value: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      },
    ];

    const notifications = getAllNotificationsByUser(userId);
    expect(notifications).toEqual(expectedNotifications);
  });
});
