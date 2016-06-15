import App from './app.jsx';

const routes = {
    component: 'div',
    childRoutes: [{
        path: '/',
        component: App,
        getIndexRoute(location, callback) {
            require.ensure([], function(require) {
                callback(null, {
                    component: require('./p/index.jsx')
                })
            }, 'index')
        },
        childRoutes: [{
            path: 'user',
            getComponent(location, callback) {
                require.ensure([], function(require) {
                    callback(null, require('./p/user.jsx'));
                }, 'user');
            }
        }]

    }]
}

export default routes;
