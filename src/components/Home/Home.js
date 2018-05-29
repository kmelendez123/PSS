import React from 'react';
import { renderRoutes } from 'react-router-config';

export default class Home extends React.Component {
    render() {
        return (
            <div className="Home">
                Welcome Home!
                <div>
                    {renderRoutes(this.props.route.routes)}
                </div>
            </div>
        );
    }
}
