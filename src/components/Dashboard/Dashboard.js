import React from 'react';
import { renderRoutes } from 'react-router-config';

export default class Dashboard extends React.Component {
    render() {
        return (
            <div className="Dashboard">
                {renderRoutes(this.props.route.routes)}
            </div>
        );
    }
}