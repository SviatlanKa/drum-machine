import React, { Component } from 'react';
import './App.css';

class DrumPad extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        if (this.props.power) {
            console.log(event.target);
            event.target.querySelector('audio').play();
            const nameState = "drumPadName";
            this.props.onHandleClick(nameState, event.target.id);
        }

    }

    render() {
        let idx = this.props.bank ? 1 : 0;
        const drumPads = [];
        this.props.data.forEach(drumPad => {
            drumPads.push(
                <button
                    id={drumPad.twoBanks[idx].name}
                    key={drumPad.id}
                    className="drum-pad"
                    onClick={this.handleClick}
                >
                    <audio
                        className="clip"
                        src={drumPad.twoBanks[idx].href}
                        id={drumPad.id}
                    >
                    </audio>
                    {drumPad.id}
                </button>
            )
        })
        return (
            <div id="drum">
                {drumPads}
            </div>
        )
    }
}

export default DrumPad;