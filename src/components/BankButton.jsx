import React, { Component } from 'react';
// import ActiveBankImage from '../icons/green.png';
// import InactiveBankImage from '../icons/metal.png';
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

            },

            inactiveBank: {

            }
        };

        const checkPower = this.props.power ?
            this.props.bank ? styles.activeBank : styles.inactiveBank
            : styles.inactiveBank;

        return (
            <div id="bank">
                <span className="bank-label">Bank</span>
                <button
                    className="bank-button metal radial"
                    onClick={this.handleClick}
                    style={checkPower}
                >
                </button>
            </div>
        )
    }
}

export default BankButton;