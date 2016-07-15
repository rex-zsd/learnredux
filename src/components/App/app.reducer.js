import {REPLACE_LOCATION} from './app.action.js';

function replaceLocation(state='', action) {
    switch (action.type) {
        case REPLACE_LOCATION:
            return action.location;
            break;
        default:
            return '';
    }
}
