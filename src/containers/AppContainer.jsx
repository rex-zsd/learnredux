import React, {PropTypes} from 'react';
import {Router} from 'react-router';
import {Provider} from 'react-redux';

const propTypes = {
    history: PropTypes.object.isRequired,
    routes: PropTypes.object.isRequired,
    store: PropTypes.object.isRequired
};

class AppContainer extends React.Component {
    render() {
        const {history, routes, store} = this.props;

        return (
            <Provider store={store}>
                <Router history={history} routes={routes}></Router>
            </Provider>
        )
    }
}

AppContainer.propTypes = propTypes;

export default AppContainer
