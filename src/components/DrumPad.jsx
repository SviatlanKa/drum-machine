import React, { Component } from 'react';
import './App.css';

class DrumPad extends Component {
    constructor(props) {
        super(props);
        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.handleMouseUp = this.handleMouseUp.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleMouseDown(event) {
        if (this.props.power) {
            let button = document.getElementById(event.target.id);
            button.style.color='rgb(0,102,204)';
            button.style.textShadow ='rgba(0,51,102,.3) 0 -1px 0, rgba(179,217,255,1) 0 2px 1px, rgba(153,221,255,1) 0 0 5px, rgba(0,128,255,.6) 0 0 20px';
        }
    }

    handleMouseUp(event) {
        let button = document.getElementById(event.target.id);
        button.style.color='rgb(51,51,51)';
        button.style.textShadow ='rgba(102,102,102,.5) 0 -1px 0, rgba(255,255,255,.6) 0 2px 1px';
    }

    handleClick(event) {
        if (this.props.power) {
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
                    onMouseDown={this.handleMouseDown}
                    onMouseUp={this.handleMouseUp}
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