import React, { Component } from 'react';
import './App.css';

class DramPad extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        console.log(event.target.value);
        // this.props.onHandleClick(event.target.value);
    }

    render() {
        const dramPads = [];
        this.props.data.forEach(dramPad => {
            dramPads.push(
                <button
                    id={"#" + dramPad.id}
                    key={dramPad.name}
                    className="dramPad"
                >
                    {dramPad.id}
                </button>
            )
        })
        return (
            <div id="dram">
                {dramPads}
            </div>
        )
    }
}

export default DramPad;