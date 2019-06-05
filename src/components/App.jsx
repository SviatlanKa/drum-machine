import React, { Component } from 'react';
import Dispay from './Display';
import DrampPad from './DramPad';

class App extends Component {
    render() {
        return (
            <div id="drum-machine">Drum Machine
                <Dispay />
                <div className="dram-pad">1</div>
                <div className="dram-pad">1</div>
                <div className="dram-pad">1</div>
                <div className="dram-pad">1</div>
                <div className="dram-pad">1</div>
                <div className="dram-pad">1</div>
                <div className="dram-pad">1</div>
                <div className="dram-pad">1</div>
                <div className="dram-pad">1</div>
            </div>
        )
    }
}

export default App;