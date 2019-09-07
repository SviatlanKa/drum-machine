import React, { Component } from 'react';
import './App.css';

class DrumPad extends Component {
    constructor(props) {
        super(props);
        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.handleMouseUp = this.handleMouseUp.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    componentDidMount() {
        document.addEventListener('keypress', this.handleKeyPress);
    }

    componentWillUnmount() {
        document.removeEventListener('keypress', this.handleKeyPress);
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
            console.log(event.target.id);
            this.props.onHandleClick("drumPadName", event.target.id);
        }
    }

    handleKeyPress(event) {
        const { bank, power, data } = this.props;
        if (power) {
            const idx = bank ? 1 : 0;
            const drumPad = data.filter(key => key.id === event.key.toUpperCase())//[0].twoBanks[idx].name;
            if (drumPad.length > 0) {
                const buttonId = drumPad[0].twoBanks[idx].name;
                document.getElementById(buttonId).querySelector('audio').play();
                this.props.onHandleClick("drumPadName", buttonId);
            }
        }
    }

    render() {
        const { bank, data } = this.props;
        const idx = bank ? 1 : 0;
        const drumPads = [];
        data.forEach(drumPad => {
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