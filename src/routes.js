import pages from './pages.json';
import checkAuth from './util/checkAuth.js';

const routes = {
    component: 'div',
    childRoutes: [{
        path: '/',
        component: require('./components/app.jsx'),
        onEnter: () => {
            console.log(123);
        },
        getIndexRoute(location, callback) {
            require.ensure([], function(require) {
                callback(null, {
                    component: require('./routes/index/components/index.jsx')
                })
            }, 'index')
        },
        childRoutes: [
            // require('./routes/index/index.js'),
            require('./routes/user/index.js')
        ]

    }]
}

export default routes;
