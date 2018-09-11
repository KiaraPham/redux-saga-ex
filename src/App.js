import React, { Component } from 'react';
import './App.css';
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

class App extends Component {
  render() {
    return (
      <div>
        <h2>Shopping Cart Example</h2>
        <hr />
        <ProductList />
        <hr />
        <Cart />
      </div>
    );
  }
}

export default App;
