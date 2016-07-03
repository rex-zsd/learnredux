import React from 'react';
//路由
import browserHistory from 'react-router/lib/browserHistory';
//react-dom
import {render} from 'react-dom';

//react-router-redux
import {syncHistoryWithStore} from 'react-router-redux';

import AppContainer from './containers/AppContainer.jsx';

//路由配置
import routes from './routes.js';
//store
import configureStore from './store';

const store = configureStore(window.__INITIAL_STATE__);

const history = syncHistoryWithStore(browserHistory, store, {
    selectLocationState: (state) => state.routing
});

// if (process.env.CLIENT && process.env.NODE_ENV === 'development') {
//     if (window.devToolsExtension) {
//         window.devToolsExtension.open()
//     }
// }

//渲染页面
render(
    <AppContainer
        store={store}
        history={history}
        routes={routes}
    />,
    document.getElementById('J_page')
);
