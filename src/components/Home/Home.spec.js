import React from 'react';
import Home from './Home';
import { mount } from 'enzyme';
import routes from '../../routes';

describe('Home', () => {
    let props;
    let mountedHome;
    const home = () => {
        if(!mountedHome) {
            mountedHome = mount(
                <Home {...props} />
            );
        }
        return mountedHome;
    };

    beforeEach(() => {
        props = {
            route: routes[0].routes[0].routes
        };
        mountedHome = undefined;
    });

    it("always renders a div", () => {
        const divs = home().find("div");
        expect(divs.length).toBeGreaterThan(0);
    });

});
