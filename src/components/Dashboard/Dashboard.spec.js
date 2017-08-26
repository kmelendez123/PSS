import React from 'react';
import Dashboard from './Dashboard';
import { shallow, mount } from 'enzyme';
import routes from '../../routes';
import { Route } from 'react-router-dom';

describe('Dashboard', () => {
    let props;
    let mountedDashboard;
    const dashboard = () => {
        if(!mountedDashboard) {
            mountedDashboard = mount(
                <Dashboard {...props} />
            );
        }
        return mountedDashboard;
    }

    beforeEach(() => {
        props = {
            route: routes[0].routes
        };
        mountedDashboard = undefined;
    });

    it("always renders a div", () => {
       const divs = dashboard().find("div");
       expect(divs.length).toBeGreaterThan(0);
    });
})
