import React, { Component } from 'react';
import Dispay from './Display';
import DrampPad from './DramPad';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dramPadName: ''
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(dramPadName) {
        this.setState({ dramPadName });
    }

    render() {
        return (
            <div id="drum-machine">
                <Dispay name={this.state.dramPadName}/>
                <DrampPad
                    data={this.props.data}
                    onHandleClick={this.handleClick}
                />
            </div>
        )
    }
}

export default App;