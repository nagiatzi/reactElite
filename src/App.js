import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Example from './components/navbar'
import Hello from './components/hallo'
import Hello2 from './components/hallo2'
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Example} />
        <Route exact path="/hello" component={Hello} />
      <Route exact path="/hello2" component={Hello2} />
        </div>
      </Router>
    );
  }
}

export default App;
