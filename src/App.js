import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">SWISS-CARS</h1>
        </header>
        <Button bsStyle="info">Bootstrap button</Button>
      </div>
    );
  }
}

export default App;
