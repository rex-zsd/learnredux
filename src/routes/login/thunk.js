import { login } from './action';

function fetchLogin() {
  return fetch('http://localhost:3000/index', {
    method: 'post',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      data: 1
    })
  }).then(res => res.json());
}

export function loginAsync() {
  return async function (dispatch, getState) {
    var res = await fetchLogin();
    console.log(res);
    dispatch(login(res));
  }
}
