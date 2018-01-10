import React, { Component } from 'react';
import './App.css';
import EliteNav from './components/navbar';
import Banner from './components/banner';
import Product1  from './components/product1';
import Product2  from './components/product2';
import Product3  from './components/product3';
import Contact from './components/contact';
import Footer from './components/footer';
import Findus from './components/findus';
import MyMapComponent from './components/map';

class App extends Component {
  render() {
    return (
      <div className="App">
        <EliteNav />
        <Banner />
        <Product1 />
        <Product2 />
        <Product3 />
        <Contact />
        <Findus />
        <MyMapComponent isMarkerShown={true} />
        <Footer />
      </div>
    );
  }
}

export default App;
