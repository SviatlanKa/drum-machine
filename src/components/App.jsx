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

    handleClick(drumPadName) {
        this.setState({ drumPadName });
    }

    render() {
        return (
            <div id="drum-machine">
                <PowerButton />
                <Dispay name={this.state.drumPadName}/>
                <BankButton />
                <DrumpPad
                    data={this.props.data}
                    onHandleClick={this.handleClick}
                />
            </div>
        )
    }
}

export default App;