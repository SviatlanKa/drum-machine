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
        console.log(stateName);
        this.setState({ "{stateName}": value });
    }

    render() {
        //add function to get data from button bank
        return (
            <div id="drum-machine">
                <PowerButton
                    onHandleClick={this.handleClick}
                />
                <Dispay name={this.state.drumPadName}/>
                <BankButton

                />
                <DrumpPad
                    data={this.props.data}
                    //bank={this.state.bank}
                    power={this.state.power}
                    onHandleClick={this.handleClick}
                />
            </div>
        )
    }
}

export default App;