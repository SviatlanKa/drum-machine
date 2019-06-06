import React, { Component } from 'react';
import './App.css';

class DramPad extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        this.props.onHandleClick(event.target.value);
    }

    render() {
        const dramPads = [];
        return (
            <div id="">DramPad
                this.props.data.forEach(dramPad){
                    let idUpperCase = "#" + dramPad.id.toUpperCase();
                    <button id="#`{dramPad.id}`">{dramPad.id}</button>
}
    </div>
        )
    }
}

export default DramPad;