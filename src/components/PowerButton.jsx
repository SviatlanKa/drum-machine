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
                color: "hsl(133, 100%, 40%)",
                filter: "drop-shadow(0 0 .5rem hsl(133, 100%, 40%))"
            },

            powerOff: {
                color: "hsl(8, 97%, 48%)",
                filter: "drop-shadow(0 0 .5rem hsl(8, 97%, 48%))"
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