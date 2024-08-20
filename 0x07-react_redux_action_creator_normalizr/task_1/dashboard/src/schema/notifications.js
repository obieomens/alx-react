import {schema} from 'normalizr';
import { user } from '../App/AppContext';
const user = new schema.Entity('users');

const message = new schema.Entity('messages', {}, {
idAttribute: 'guide'});

const notification = new schema.Entity('notifications', {
  author: user,
  context: message
});

export { user, message, notification };
