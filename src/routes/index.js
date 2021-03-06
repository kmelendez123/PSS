import React from 'react';
import { Dashboard, Home } from '../components/index';

const routes = [{
    component: Dashboard,
    routes: [{
        name: "Home",
        icon: "home",
        path: '/',
        exact: true,
        component: Home,
        routes: [{
            path: '/',
            exact: true,
            component: Home
        }]
    }]
}];

export default routes;



