//路由
import Router from 'react-router/lib/Router';
import browserHistory from 'react-router/lib/browserHistory';
//react-dom
import {render} from 'react-dom';
//redux
import {createStore, connect, combineReducers} from 'redux';
//react-redux
import {Provider} from 'react-redux';
//react-router-redux
import {syncHistoryWithStore, routerReducer} from 'react-router-redux';
//fetch polyfill
import 'whatwg-fetch';
//promise polyfill
import Promise from 'es6-promise';
Promise.polyfill();
//路由配置
import routes from './routes.js';

import todo from './reducers';
import {doSomething} from './actions';

let store = createStore(
    combineReducers({
        str: todo,
        routing: routerReducer
    })
);
console.log(store.getState());
// 注意 subscribe() 返回一个函数用来注销监听器
let unsubscribe = store.subscribe(() => console.log(store.getState()));
store.dispatch(doSomething('123'));
const history = syncHistoryWithStore(browserHistory, store);

//渲染页面
render((
    <Provider store={store}>
        <Router history={history} routes={routes}></Router>
    </Provider>
), document.getElementById('J_page'));
