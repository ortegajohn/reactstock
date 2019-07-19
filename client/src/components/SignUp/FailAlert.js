import React, { Component } from 'react';

export default class FailAlert extends Component {
    render() {
        return (
            <div className="alert alert-error" role="alert">
                <strong>Error</strong>
            </div>
        );
    }
}