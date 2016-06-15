const DO_SOMETHING = 'DO_SOMETHING';

function doSomething(str) {
    return {
        type: DO_SOMETHING,
        str
    };
}

export {
    DO_SOMETHING,
    doSomething
}
