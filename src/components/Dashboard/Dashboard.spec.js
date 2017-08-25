'use strict';

import React from 'react';
import Dashboard from './Dashboard';
import { mount } from 'enzyme';

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
        props = {};
        mountedDashboard = undefined;
    });

    it("always renders a div", () => {
       const divs = dashboard().find("div");
       expect(divs.length).toBeGreaterThan(0);
    });

})
