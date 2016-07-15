import checkAuth from '../util/checkAuth.js';

const routes = {
    component: 'div',
    childRoutes: [{
        path: '/',
        getComponent(location, callback) {
            require.ensure([], function(require) {
                callback(null, require('../components/App/app.jsx'));
            }, 'app');
        },
        onEnter(nextState, replace, callback) {
            const check = checkAuth('', nextState);
            if (check) {
                replace('/login');
            }
            callback();

        },
        onChange(prevState, nextState, replace, callback) {
            const check = checkAuth('', nextState);
            if (check) {
                replace('/login');
            }
            callback();
        },
        // getIndexRoute(location, callback) {
        //     require.ensure([], function(require) {
        //         callback(null, {
        //             component: require('./index/components/index.jsx')
        //         })
        //     }, 'index')
        // },
        childRoutes: [
            require('./index/index.js'),
            require('./user/index.js'),
            require('./login/index.js')
        ]

    }]
};

export default routes;
