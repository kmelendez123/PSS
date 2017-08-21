import React from 'react';
import Routes from '../../routes';
import { NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

export default class Header extends React.Component {
    render() {
        const Links = Routes.map(({path, component, label, icon, exact = false}, key) => {
           return <Menu.Item as={NavLink} to={path} component={component} icon={icon} exact={exact} name={label} key={key} />;
        });

        return (
            <div className="site-header" >
                <Menu>
                    {Links}
                </Menu>
            </div>
        );
    }
}
