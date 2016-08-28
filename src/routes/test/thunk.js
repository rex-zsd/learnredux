import { saveAesKey, saveToken } from './action';
import fetch from '../../util/fetch';
import { encrypt, decrypt, decryptPublic } from '../../util/encrypt';

function fetchLogin() {
    return fetch('assistant/security/user/login', {
        method: 'post',
        query: {
            "Yb_Assistant_Client": 3,
            cid: '748f1a2620029bee13e03c026174d4f0',
            deviceId: '804C9FCB-1C3E-479E-A7BD-E49C00591516',
            password: encrypt('123456'),
            phone: encrypt('15757129739')
        }
    }).then(res => JSON.parse(res));
}

export function loginAssistantAsync() {
    return async function(dispatch, getState) {
        const res = await fetchLogin();

        const userId = decryptPublic(res.userId);
        const token = encrypt(userId);
        dispatch(saveToken(token));

        const aesKey = decryptPublic(res.aesKey);
        dispatch(saveAesKey(aesKey));

        console.log(aesKey);

        fetch('assistant/security/user/login', {
            method: 'post',
            aesKey: getState().test.aesKey,
            query: {
                "Yb_Assistant_Client": 3,
                cid: '748f1a2620029bee13e03c026174d4f0',
                deviceId: '804C9FCB-1C3E-479E-A7BD-E49C00591516',
                password: encrypt('123456'),
                phone: encrypt('15757129739')
            }
        }).then(res => JSON.parse(res));

    }
}
