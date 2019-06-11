import React, { Component } from 'react';
import './App.css';

class Display extends Component {
    render() {
        const checkPower = (this.props.power) ? this.props.name : '';
        return (
            <div id="display">
                {checkPower}
            </div>
        )
    }
}

export default Display;