import React from 'react';
import {
    useRecoilState,
} from 'recoil';
import { counterState } from './state';
import logo from './logo.svg';

import './App.css';

function App() {
    const [counter, setCounter] = useRecoilState(counterState);
    const increaseCounter = () => setCounter(counter + 1);

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <div>Here be counter: {counter}</div>
                <button onClick={increaseCounter}>Increase counter</button>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
