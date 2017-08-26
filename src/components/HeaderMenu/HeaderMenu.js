import React from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';

export default class HeaderMenu extends React.Component {
    render() {
        const menuItems = routes[0].routes.map((route, index) => (
            <Menu.Item as={NavLink} key={index} name={route.name} to={route.path} {...this.props} >
                <Icon name={route.icon} />
                {route.name}
            </Menu.Item>
        ));

        return (
            <div className="HeaderMenu" >
                <Menu className="HeaderMenu" >
                    {menuItems}
                </Menu>
            </div>
        );
    }
}