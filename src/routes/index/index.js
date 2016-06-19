module.exports = {
    path: 'index',
    getComponent(location, callback) {
        require.ensure([], function(require) {
            callback(null, require('./components/index.jsx'));
        }, 'index');
    }
};
