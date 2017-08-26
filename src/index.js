import React from 'react';
import ReactDOM from 'react-dom';
import Store from './store';
import routes from './routes';
import { renderRoutes } from 'react-router-config';

ReactDOM.render(
    <Store>
        {renderRoutes(routes)}
    </Store>,
    document.getElementById('app')
);
