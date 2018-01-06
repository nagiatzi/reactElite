import React, { Component } from 'react';
import './App.css';
import Example from './components/navbar'
import Hello from './components/hallo'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Example />
        <Hello />
      </div>
    );
  }
}

export default App;
