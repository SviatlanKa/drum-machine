import React, { Component } from 'react';
import './App.css';

class DrumPad extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        event.target.querySelector('audio').play();
        this.props.onHandleClick(event.target.id);
    }

    render() {
        // const btn = document.querySelector('button');
        // btn.addEventListener('click', this.handleClick);
        const drumPads = [];
        this.props.data.forEach(drumPad => {
            drumPads.push(
                <button
                    id={drumPad.name}
                    key={drumPad.id}
                    className="drum-pad"
                    onClick={this.handleClick}
                >
                    <audio
                        className="clip"
                        src={drumPad.href}
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