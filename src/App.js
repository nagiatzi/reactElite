import React, { Component } from 'react';
import './App.css';
import EliteNav from './components/navbar'
import Banner from './components/banner'
import Hallo from './components/hallo'
class App extends Component {
  render() {
    return (
      <div className="App">
        <EliteNav />
        <Banner />
        <Hallo />
      </div>
    );
  }
}

export default App;
