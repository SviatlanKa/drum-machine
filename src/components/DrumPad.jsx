import React, { Component } from 'react';
import './App.css';

class DrumPad extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isClick: false
        }
        // this.handleMouseDown = this.handleMouseDown.bind(this);
        // this.handleMouseUp = this.handleMouseUp.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        let { isClick } = this.state;
        if (this.state.isClick != prevState.isClick) {
            let declaration = document.styleSheets[2].rules[6].style;
            declaration.setProperty('color', 'rgb(51,51,51)');
            declaration.setProperty('text-shadow', 'rgba(102,102,102,.5) 0 -1px 0, rgba(255,255,255,.6) 0 2px 1px');
            // isClick = !isClick;
            this.setState({ isClick });
        }
    }

    // handleMouseDown() {
    //     if (this.props.power) {
    //         const btnStyle ={
    //             color: "rgb(0,102,204)",
    //             filter: "text-shadow(rgba(0,51,102,.3) 0 -1px 0, rgba(179,217,255,1) 0 2px 1px, " +
    //                 "rgba(153,221,255,1) 0 0 5px, rgba(0,128,255,.6) 0 0 20px)"
    //         };
    //         this.setState({ btnStyle });
    //         }
    // }

    // handleMouseUp() {
    //     const btnStyle ={
    //         color: "rgb(0,102,204)",
    //         filter: "text-shadow(rgba(102,102,102,.5) 0 -1px 0, rgba(255,255,255,.6) 0 2px 1px)"
    //     };
    //     this.setState({ btnStyle });
    // }

    handleClick(event) {
        if (this.props.power) {
            let { isClick } = this.state;
            let declaration = document.styleSheets[2].rules[6].style;
            console.log(declaration);
            declaration.setProperty('color', 'rgb(0,102,204)');
            declaration.setProperty('text-shadow', 'rgba(0,51,102,.3) 0 -1px 0, rgba(179,217,255,1) 0 2px 1px, rgba(153,221,255,1) 0 0 5px, rgba(0,128,255,.6) 0 0 20px');
            event.target.querySelector('audio').play();
            isClick = !isClick;
            // declaration.setProperty('color', 'rgb(51,51,51)');
            // declaration.setProperty('text-shadow', 'rgba(102,102,102,.5) 0 -1px 0, rgba(255,255,255,.6) 0 2px 1px');
            this.setState({ isClick });
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
                    // style={this.state.btnStyle}
                    // onMouseDown={this.handleMouseDown}
                    // onMouseUp={this.handleMouseUp}
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