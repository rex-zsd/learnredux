module.exports = {
    path: 'login',
    getComponent(location, callback) {
        require.ensure([], function(require) {
            callback(null, require('./components/login.jsx'));
        }, 'login');
    }
};
