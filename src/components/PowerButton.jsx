import React, { Component } from 'react';
import './App.css';

class PowerButton extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const stateName = "power";
        this.props.onHandleClick(stateName, !this.props.power);
    }

    render() {
        return (
            <div id="power">
                <button
                    className="power-button"
                    onClick={this.handleClick}
                    style={ this.props.power ? {backgroundColor: '#4CAF50'} : {backgroundColor: '#f44336'}}
                >
                    Power Button
                </button>
            </div>
        )
    }
}

export default PowerButton;