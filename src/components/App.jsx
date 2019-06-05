import React, { Component } from 'react';
import Dispay from './Display';
import DrampPad from './DramPad';
import dataStorage from '../data/dataStorage';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            href: '',
            name: ''
        }
        this.getData = this.getData.bind(this);
    }

    const

    getData(dataStorage) {
        dataStorage.forEach()
    }

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