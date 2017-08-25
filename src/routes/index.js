import React from 'react';
import { Dashboard } from '../components/index';

const Routes = [{
    component: Dashboard,
    routes: [
        {   path: '/',
            exact: true,
            component: Home
        }
    ]
}
];

export default Routes;



