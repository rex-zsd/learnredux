//redux
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
//redux-thunk
import thunk from 'redux-thunk';
//react-router-redux
import { routerReducer as routing } from 'react-router-redux';
//reducers
import * as reducers from './reducers/index.js';

const rootReducer = combineReducers({
    ...reducers,
    routing
});

export default function configureStore(initialState = {}) {
    // Middleware and store enhancers
    const enhancers = [
        applyMiddleware(thunk),
    ];
    //开发环境下启用redux-devTool
    if (process.env.CLIENT && process.env.NODE_ENV === 'development') {
        enhancers.push(window.devToolsExtension ? window.devToolsExtension() : DevTools.instrument());
    }

    const store = createStore(rootReducer, initialState, compose(...enhancers));
    return store;
}
