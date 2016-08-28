import {
    encrypt,
    decrypt
} from './encrypt';

const data = {
    "Yb_Assistant_Client": 3,
    cid: '748f1a2620029bee13e03c026174d4f0',
    deviceId: '804C9FCB-1C3E-479E-A7BD-E49C00591516',
    password: encrypt('123456'),
    phone: encrypt('15757129739')
}

let param = '';

for (let i in data) {
    if (!param.length)
        param += '?' + i + '=' + data[i];
    else
        param += '&' + i + '=' + data[i];
}

fetch('assistant/security/user/login' + param, {
        method: 'post'
    })
    .then(res => res.json())
    .then(res => {
        const data = JSON.parse(res.data);
        console.log(data);
    });
