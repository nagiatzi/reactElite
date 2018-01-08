import React, { Component } from 'react';
import './App.css';
import EliteNav from './components/navbar'
import Hello from './components/hallo'
import Hello2 from './components/hallo2'
class App extends Component {
  render() {
    return (
      <div className="App">
        <EliteNav />
        <Hello />
        <Hello2 />
      </div>
    );
  }
}

export default App;
