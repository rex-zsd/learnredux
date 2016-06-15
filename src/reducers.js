import { DO_SOMETHING } from './actions';

function todo(state = '', action) {
    switch (action.type) {
        case DO_SOMETHING:
            console.log('do something');
            return state.concat(action.str);
            break;
        default:
            return state;
            console.log('default');
    }
}

export default todo;
