import React, { Component } from 'react';
import './App.css';
import { EnterText } from './wordcount/StartGame';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <EnterText />
          {/* <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a> */}
        </header>
      </div>
    );
  }
}

export default App;
