//redux
import { createStore, combineReducers, compose } from 'redux';
//react-router-redux
import { routerReducer } from 'react-router-redux';
//reducers
import * as reducers from './reducers/index.js';

let store = createStore(
    combineReducers({
        ...reducers,
        routing: routerReducer
    })
);
// console.log(store.getState());
// 注意 subscribe() 返回一个函数用来注销监听器
let unsubscribe = store.subscribe(() => console.log(store.getState()));

export default store;
