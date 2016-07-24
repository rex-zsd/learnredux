import config from '../config.js';

const host = config[process.env.NODE_ENV].host;

export default function myFetch(url, config) {
  return fetch(`${host}${url}`, config)
    .then(res => res.json())
    .then(res => res.body);
}
