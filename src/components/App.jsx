import React, { Component } from 'react';
import PowerButton from './PowerButton';
import Dispay from './Display';
import BankButton from './BankButton';
import DrumpPad from './DrumPad';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            drumPadName: '',
            bank: false,
            power: true
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(stateName, value) {
        this.setState({ [stateName]: value });
    }

    render() {
        return (
            <div id="drum-machine">
                <Dispay
                    power={this.state.power}
                    name={this.state.drumPadName}
                />
                <PowerButton
                    power={this.state.power}
                    onHandleClick={this.handleClick}
                />
                <BankButton
                    bank={this.state.bank}
                    power={this.state.power}
                    onHandleClick={this.handleClick}
                />
                <DrumpPad
                    data={this.props.data}
                    bank={this.state.bank}
                    power={this.state.power}
                    onHandleClick={this.handleClick}
                />
            </div>
        )
    }
}

export default App;