import React, { Component } from 'react';
// import PowerOn from '../icons/power-on.png';
// import PowerOff from '../icons/power-off.png';
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
        const styles = {
            powerOn: {

            },

            powerOff: {

            }
        }

        const powerCheck = this.props.power ? styles.powerOn : styles.powerOff;

        return (
            <div id="power">
                <span className="power-label">Power</span>
                <button
                    className="power-button metal radial"
                    onClick={this.handleClick}
                    style={powerCheck}
                >
                </button>
            </div>
        )
    }
}

export default PowerButton;