import React from 'react';
import { renderRoutes } from 'react-router-config';
import HeaderMenu from "../HeaderMenu/HeaderMenu";


export default class Dashboard extends React.Component {
    render() {
        return (
            <div className="Dashboard">
                <HeaderMenu/>
                {renderRoutes(this.props.route.routes)}
            </div>
        );
    }
}
