import React from 'react';
import ReactDOM from 'react-dom';
import Store from './store';
import { Dashboard } from './components';

ReactDOM.render(
    <Store>
       <Dashboard />
    </Store>,
    document.getElementById('app')
);
