import React from 'react';
import { createStore, combineReducers, applyMiddleware, compose} from 'redux';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';
import reducers from '../reducers/index';
import Raven from 'raven-js';
import createRavenMiddleware from 'raven-for-redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const RavenDSN = "https://bcec4109419444b09651d9ec71290880@sentry.io/206161";
Raven.config(RavenDSN).install();

const history = createHistory();

const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;

const store = createStore(
    combineReducers(
        Object.assign(reducers, {
            router: routerReducer
        })
    ),
    composeEnhancers(
        applyMiddleware(
            thunk,
            routerMiddleware(history),
            logger,
            createRavenMiddleware(Raven)
        )
    )
);

export default class Store extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <div className="router">
                        {this.props.children}
                    </div>
                </ConnectedRouter>
            </Provider>
        )
    }
}