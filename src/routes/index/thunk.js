import { getData } from './action';

function fetchData() {
  var form = new FormData;
  form.append('FBrokerId', 336);
  return fetch('http://t.yh.120yibao.com/yb/broker/loadAssistantInfo.do', {
    method: 'post',
    body: form,
  }).then(res => res.json());
}

export function getDataAsync(config) {
  return async function (dispatch, getState) {

      var res = await fetchData();
      console.log(res);
      dispatch(getData(res.body));
      
  };
}
