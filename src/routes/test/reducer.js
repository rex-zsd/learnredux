import { combineReducers } from 'redux';
import { SAVE_AES, SAVE_TOKEN } from './action';

//aeskey
function aesKey(state = '', action) {
    switch (action.type) {
        case SAVE_AES:
            return action.aesKey;
        default:
            return state;
    }
}
//token
function token(state = '', action) {
    switch (action.type) {
        case SAVE_TOKEN:
            return action.token;
        default:
            return state;
    }
}

export default combineReducers({
    aesKey,
    token
});
