import { DO_SOMETHING } from '../constant.js';

export function doSomething(str) {
    return {
        type: DO_SOMETHING,
        str
    };
}
