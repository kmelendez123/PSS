import React from 'react';
import Routes from '../../routes';
import { NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

export default class SiteHeader extends React.Component {
    render() {
        return (
            <Menu className="site-header" >
                { Routes.map(({path, component, label, icon, exact = false}, key) => <Menu.Item as={NavLink} to={path} component={component} icon={icon} exact={exact} name={label} key={key} />) }
            </Menu>
        );
    }
}
