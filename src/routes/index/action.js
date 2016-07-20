export const GET_DATA = 'GET_DATA';

export function getData(data) {
  return {
    type: GET_DATA,
    data
  };
}
