import { LOGIN } from './login.action';

export function login(state = {}, action) {
  switch (action.type) {
  case LOGIN:
    return action.user;
  default:
    return {};
  }
}
