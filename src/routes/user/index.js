module.exports = {
    path: 'user',
    getComponent(location, callback) {
        require.ensure([], function(require) {
            callback(null, require('./components/user.jsx'));
        }, 'user');
    }
}
