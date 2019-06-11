import React, { Component } from 'react';
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
        const bankOnBackgrnd = "url('../icons/green.png') no-repeat center center fixed";
        const bankOffBackgrnd = "url('../icons/green.png') no-repeat center center fixed";

        const checkPower = this.props.power ? (this.props.bank ? {background: {bankOnBackgrnd}} : {background: {bankOffBackgrnd}})
            : {};

        return (
            <div id="bank">
                <button
                    className="bank-button"
                    onClick={this.handleClick}
                    style={checkPower}
                >
                    Bank
                </button>
            </div>
        )
    }
}

export default BankButton;