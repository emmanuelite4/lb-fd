import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

    const handleFetch = async () => {
        const response = await fetch('/workflow');
        const body = await response.json();
        console.log(body)
    }

    useEffect(() => {
        handleFetch()
    }, [])

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
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
