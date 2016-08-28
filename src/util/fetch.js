import config from '../config.js';
import {aesEncrypt} from './encrypt';

const assistantHost = config[process.env.NODE_ENV].assistantHost;
const _fetch = window.fetch;

//序列化query参数
function formatQuery(query) {
    let param = '';
    for (let i in query) {
        if (!param.length)
            param += i + '=' + query[i];
        else
            param += '&' + i + '=' + query[i];
    }
    return param;
}

//对对象进行排序
function sortObject(map) {
    return Object.keys(map).sort((a, b) => (a < b)).reduce((result, key) => {
        result[key] = map[key];
        return result;
    }, {});
}

//导出自定义fetch方法
export default function myFetch(url, config) {
    const query = formatQuery(config.query);
    let map = {
        b: 1,
        a: 2,
        c: 3
    };
    map = sortObject(map);
    map = formatQuery(map);
    map = `${config.aesKey}${map}${config.aesKey}`;
    console.log(map);
    //发起请求
    return _fetch(`${assistantHost}${url}?${query}`, config)
        .then(res => res.json())
        .then(res => res.data);
}
