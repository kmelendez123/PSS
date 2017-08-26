import React from 'react';
import HeaderMenu from './HeaderMenu';
import { shallow, mount } from 'enzyme';
import { Menu } from 'semantic-ui-react';

describe('HeaderMenu', () => {
    let props;
    let shallowHeaderMenu;
    const headerMenu = () => {
        if(!shallowHeaderMenu) {
            shallowHeaderMenu = shallow(
                <HeaderMenu {...props} />
            );
        }
        return shallowHeaderMenu;
    };

    beforeEach(() => {
        shallowHeaderMenu = undefined;
    });

    it("renders a menu", () => {
       const menu = headerMenu().find("Menu");
       expect(menu.length).toBeGreaterThan(0);
    });

    describe("the rendered div", () => {
        it("contains everything else that gets rendered", () => {
            const divs = headerMenu().find("div");
            const wrappingDiv = divs.first();
            expect(wrappingDiv.children()).toEqual(headerMenu().children());
        });
    });
});
