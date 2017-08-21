import React from 'react';
import ReactDOM from 'react-dom';
import Store from './store';
import Routes from './routes';
import Header from './components/header';
import { Switch, Route } from 'react-router-dom';

ReactDOM.render(
    <Store>
        <Header routes={routes} />
        <Switch>
            {Routes.map(({path, component, exact = false}, key) => <Route path={path} component={component} exact={exact} key={key} />)}
        </Switch>
    </Store>,
    document.getElementById('app')
);
