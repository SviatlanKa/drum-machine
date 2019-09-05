import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullseye } from '@fortawesome/free-solid-svg-icons';
import './App.css';

class BankButton extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        if (this.props.power) {
            const nameState = "bank";
            this.props.onHandleClick(nameState, !this.props.bank);
        }
    }

    render() {
        const styles = {
            activeBank: {
                color: "rgb(2, 176, 36)",
                filter: "drop-shadow(0 0 .5rem hsl(133, 100%, 40%))"
            },

            inactiveBank: {
                color: "hsl(8, 1%, 53%)",
                filter: "drop-shadow(0 0 .5rem hsl(8, 1%, 53%))"
            }
        };

        const checkPower = this.props.power ?
            this.props.bank ? styles.activeBank : styles.inactiveBank
            : styles.inactiveBank;

        return (
            <div id="bank">
                <span className="bank-label">Bank</span>
                <button
                    className="bank-button"
                    onClick={this.handleClick}
                >
                    <FontAwesomeIcon icon={faBullseye} className="icon" style={checkPower} />
                </button>
            </div>
        )
    }
}

export default BankButton;