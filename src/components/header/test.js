"use strict";

import React from 'react';
import { mount, render, shallow } from 'enzyme';
import Header from './index';
import { Menu } from 'semantic-ui-react';

describe("Header", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Header />);
    });

    it("should render correctly", () => {
       expect(wrapper).toMatchSnapshot();
    });
});