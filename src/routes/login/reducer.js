import { LOG_IN } from './action';

export default function user(state = {}, action) {
  switch (action.type) {
  case LOG_IN:
    return action.user;
  default:
    return {};
  }
}
