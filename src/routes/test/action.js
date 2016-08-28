export const SAVE_AES = 'SAVE_AES';
export const SAVE_TOKEN = 'SAVE_TOKEN';

//保存aesKey
export function saveAesKey(aesKey) {
    return {
        type: SAVE_AES,
        aesKey
    }
}

export function saveToken(token) {
    return {
        type: SAVE_TOKEN,
        token
    }
}
