import React from 'react';
import browserHistory from 'react-router/lib/browserHistory';
import {render} from 'react-dom';
import {syncHistoryWithStore} from 'react-router-redux';
import AppContainer from './containers/AppContainer.jsx';

import routes from './routes/index.js';
import configureStore from './store';

const store = configureStore(window.__INITIAL_STATE__);
const history = syncHistoryWithStore(browserHistory, store, {
    selectLocationState: (state) => state.routing
});

render(
    <AppContainer
        store={store}
        history={history}
        routes={routes}
    />,
    document.getElementById('J_page')
);
