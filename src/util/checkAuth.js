const LOGIN_LIST = [
    '/user'
];

export default (prevState, nextState) => {
    if (LOGIN_LIST.indexOf(nextState.location.pathname) < 0)
        return false;
    return true;
}
