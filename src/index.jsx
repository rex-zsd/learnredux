//路由
import Router from 'react-router/lib/Router';
import browserHistory from 'react-router/lib/browserHistory';
//react-dom
import {render} from 'react-dom';
//react-redux
import {Provider} from 'react-redux';
//react-router-redux
import {syncHistoryWithStore} from 'react-router-redux';
//fetch polyfill
import 'whatwg-fetch';
//promise polyfill
import Promise from 'es6-promise';
Promise.polyfill();
//路由配置
import routes from './routes.js';
//store
import store from './store';

import {renderToString} from 'react-dom/server';

const history = syncHistoryWithStore(browserHistory, store);

//渲染页面
render((
    <Provider store={store}>
        <Router history={history} routes={routes}></Router>
    </Provider>
), document.getElementById('J_page'));
