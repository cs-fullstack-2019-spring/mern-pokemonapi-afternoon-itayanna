import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Pokemon from "./Pokemon";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Code School pokeDex!</h1>
        <Pokemon/>
      </div>
    );
  }
}

export default App;
