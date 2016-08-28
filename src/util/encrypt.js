import RSA from 'node-rsa';
import AES from 'crypto-js/aes';

const publicKey = '-----BEGIN PUBLIC KEY-----' +
    'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCrJhZS8r0M6R3T4xDe5aJEtHk+' +
    'WPE5fo1KhHLmnPPgF+8QoLK50GAGXmYVkKqF52ZUgV+FVSBEL++JCiGace+uGCl/' +
    'ucSKDLjoVal408Tm2x68W+R/ZTMAcaczvr4yTNe78DM5tueWbGmAFUtpgNu4zZu4' +
    'vx7BseWlvQn0VrwN8wIDAQAB' +
    '-----END PUBLIC KEY-----';

const privateKey = '-----BEGIN RSA PRIVATE KEY-----' +
    'MIICXQIBAAKBgQCrJhZS8r0M6R3T4xDe5aJEtHk+WPE5fo1KhHLmnPPgF+8QoLK5' +
    '0GAGXmYVkKqF52ZUgV+FVSBEL++JCiGace+uGCl/ucSKDLjoVal408Tm2x68W+R/' +
    'ZTMAcaczvr4yTNe78DM5tueWbGmAFUtpgNu4zZu4vx7BseWlvQn0VrwN8wIDAQAB' +
    'AoGAIcrnZYFgKohsx0VyM1CL9Zzcw560InIGW8xDE52x2XFgVpwkLeQi0Z8Z8PAb' +
    'e0zxO4Y/4geo003Tse86K1CLzjVmkwPIcccHj/ylyt3mzRPYNqGdjT4Txnavp80O' +
    'J9InxJs3EW+Hd37/0hLoRM8dmrBTZB0G3lUOLqTM1jJ+O+ECQQDZjy5+AXtJ3zql' +
    'O/CBF54lyBNI+5zYGeAMMObozIYwBuojKaIt7fLFtL8aRlT9PGrxEjDR3g+HSVMa' +
    'so00EEPtAkEAyWOgjwWoc19vZ/wQM/CRifKBoPPT/21k4MpzM63+uQkHjag+YNYM' +
    'TBxR0mCk8lzf58/zsxvpPtvfrAGP0uUdXwJAXqtlicNPSNfwhxJMF4CVes9TRQDo' +
    'QUkRK3zkHg1RnviDTgXB4saWS93ZAq/0L7Xouzo1MD22+CG6HfXwZ+VkCQJBAKuS' +
    'n0V6EotIcUdr7fnyKGwYGOwhDyn77we8Mu2CfRLzaGX9QjeJ5KwrLGJJR/3btj5u' +
    'YjbjvpF5DVQjeH66B40CQQCxpD80USrVIirB4vFbfK+uJc9W0Hw3iUwh3aio1lIu' +
    'aCLt2oEbo9asu1F7Cj7jpGYnWEaO+YTX3UhPLrH6hlZ3' +
    '-----END RSA PRIVATE KEY-----';

let key = new RSA();
key.setOptions({
    environment: 'browser',
    encryptionScheme: 'pkcs1'
});

export function encrypt(text) {
    key.importKey(publicKey);
    const encrypted = key.encrypt(text, 'base64');
    return encodeURIComponent(encrypted);
}

export function encryptPrivate() {
    key.importKey(privateKey);
    const encrypted = key.encryptPrivate(text, 'base64');
    return encodeURIComponent(encrypted);
}

export function decrypt(text) {
    key.importKey(privateKey);
    const decrypted = key.decrypt(text, 'utf-8');
    return encodeURIComponent(decrypted);
}

export function decryptPublic(text) {
    key.importKey(publicKey);
    const decrypted = key.decryptPublic(text, 'utf-8');
    return decodeURIComponent(decrypted);
}

export function aesEncrypt(text, aesKey) {
    return AES.encrypt(text, aesKey);
}
