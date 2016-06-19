import { DO_SOMETHING } from '../constant.js';

function str(state = '', action) {
    switch (action.type) {
        case DO_SOMETHING:
            return state + action.str;
            break;
        default:
            return state;
    }
}

export default str;
