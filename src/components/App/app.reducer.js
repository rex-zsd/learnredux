import { REPLACE_LOCATION } from './app.action.js';

export default function replaceLocation(state = '', action) {
  switch (action.type) {
    case REPLACE_LOCATION:
      return action.location;
    default:
      return '';
  }
}
