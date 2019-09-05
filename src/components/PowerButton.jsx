import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
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
                color: "rgb(0, 204, 44)",
                filter: "drop-shadow(0 0 .5rem rgb(0, 204, 44))"
            },

            powerOff: {
                color: "rgb(241, 35, 4)",
                filter: "drop-shadow(0 0 .5rem rgb(241, 35, 4))"
            }
        }

        const powerCheck = this.props.power ? styles.powerOn : styles.powerOff;

        return (
            <div id="power">
                <span className="power-label">Power</span>
                <button
                    className="power-button"
                    onClick={this.handleClick}
                >
                    <FontAwesomeIcon icon={faPowerOff} className="icon" style={powerCheck}/>
                </button>
            </div>
        )
    }
}

export default PowerButton;