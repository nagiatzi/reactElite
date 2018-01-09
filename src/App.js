import React, { Component } from 'react';
import './App.css';
import EliteNav from './components/navbar'
import Banner from './components/banner'
import Product1  from './components/product1'
import Product2  from './components/product2'
import Product3  from './components/product3'
import Zezalize from './components/zezalize'

class App extends Component {
  render() {
    return (
      <div className="App">
        <EliteNav />
        <Banner />
        <Product1 />
        <Product2 />
        <Product3 />
        <Zezalize/>
      </div>
    );
  }
}

export default App;
