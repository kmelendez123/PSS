import React from 'react';
import Dashboard from './Dashboard';
import { shallow, mount } from 'enzyme';
import routes from '../../routes';
import { Route } from 'react-router-dom';

describe('Dashboard', () => {
    let props;
    let shallowDashboard;
    const dashboard = () => {
        if(!shallowDashboard) {
            shallowDashboard = shallow(
                <Dashboard route={routes[0]} />
            );
        }
        return shallowDashboard;
    };

    beforeEach(() => {
        props = {
            route: routes[0]
        };
        shallowDashboard = undefined;
    });

    it("always renders a div", () => {
        const divs = dashboard().find("div");
        expect(divs.length).toBeGreaterThan(0);
    });

    describe("the rendered div", () => {
        it("contains everything else that gets rendered", () => {
            const divs = dashboard().find("div");
            const wrappingDiv = divs.first();
            expect(wrappingDiv.children()).toEqual(dashboard().children());
        });
    });
});
