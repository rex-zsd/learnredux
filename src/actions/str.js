export const DO_SOMETHING = 'DO_SOMETHING';

export function doSomething(str) {
    return {
        type: DO_SOMETHING,
        str
    };
}
