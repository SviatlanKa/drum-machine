import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { DRUM_DATA } from './dataStorage';

ReactDOM.render(
    <App data={DRUM_DATA} />, document.getElementById('root')
);