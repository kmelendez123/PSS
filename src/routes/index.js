import React from 'react';
import HomePage from './home';
import AboutPage from './about';
import ContactPage from './contact';

const Routes = [
    {
        path: '/',
        component: HomePage,
        label: 'Home',
        icon: 'home',
        exact: true
    },
    {
        path: '/about',
        component: AboutPage,
        label: 'About',
        icon: 'id card'
    },
    {
        path: '/contact',
        component: ContactPage,
        label: 'Contact',
        icon: 'mail'
    }
];

export default Routes;



