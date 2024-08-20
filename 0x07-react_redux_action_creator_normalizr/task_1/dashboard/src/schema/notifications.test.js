import { normalize } from 'normalizr';
import notificationsData from '../../notifications.json';
import { notification } from './notifications';

it('should verify the users entity', () => {
  const normalizedData = normalize(notificationsData.default, [notification]);
  const userId = '5debd764a7c57c7839d722e9';
  const expectedUser = {
    age: 25,
    email: "poole.sanders@holberton.nz",
    id: "5debd764a7c57c7839d722e9",
    name: { first: "Poole", last: "Sanders" },
    picture: "http://placehold.it/32x32",
  };
  expect(normalizedData.entities.users[userId]).toEqual(expectedUser);
});
it('should verify the messages entity', () => {
  const normalizedData = normalize(notificationsData.default, [notification]);
  const messageGuid = 'efb6c485-00f7-4fdf-97cc-5e12d14d6c41';
  const expectedMessage = {
    guid: "efb6c485-00f7-4fdf-97cc-5e12d14d6c41",
    isRead: false,
    type: "default",
    value: "Cursus risus at ultrices mi.",
  };
  expect(normalizedData.entities.messages[messageGuid]).toEqual(expectedMessage);
});
it('should verify the notifications entity', () => {
  const normalizedData = normalize(notificationsData.default, [notification]);
  const notificationId = '5debd7642e815cd350407777';
  const expectedNotification = {
    author: "5debd764f8452ef92346c772",
    context: "3068c575-d619-40af-bf12-dece1ee18dd3",
    id: "5debd7642e815cd350407777",
  };
  expect(normalizedData.entities.notifications[notificationId]).toEqual(expectedNotification);
});
